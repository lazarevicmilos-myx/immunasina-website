import type { RequestHandler } from "express";
import { readFile } from "node:fs/promises";
import { pageInfo, pageRedirect } from "../shared/localization";
import { localizeHtml } from "../shared/seo";

export const redirectLocalizedPage: RequestHandler = (req, res, next) => {
  // Vite's extensionless module endpoints are assets, not localized pages.
  if (req.path.startsWith('/@') || req.path.startsWith('/__')) return next();
  if (!['GET', 'HEAD'].includes(req.method) || (req.path.includes('.') && req.path !== '/index.html') || req.path.startsWith('/api/')) return next();
  const redirect = pageRedirect(new URL(req.originalUrl, "http://localhost"));
  if (redirect) { res.redirect(308, redirect); return; }
  next();
};

export function localizedPage(templatePath: string): RequestHandler {
  return async (req, res, next) => {
    if (req.path.includes('.') || req.path.startsWith('/api/')) { res.sendStatus(404); return; }
    try {
      const html = await readFile(templatePath, "utf8");
      res.status(pageInfo(req.path).isKnown ? 200 : 404).type("html").send(localizeHtml(html, req.path));
    } catch (error) { next(error); }
  };
}
