import { localizeHtml } from '../shared/seo.ts';
import { pageInfo, pageRedirect } from '../shared/localization.ts';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!['GET', 'HEAD'].includes(request.method) ||
        (url.pathname.includes('.') && url.pathname !== '/index.html') ||
        url.pathname.startsWith('/api/')) {
      return env.ASSETS.fetch(request);
    }
    const redirect = pageRedirect(url);
    if (redirect) return Response.redirect(new URL(redirect, url.origin).href, 308);

    const asset = await env.ASSETS.fetch(new URL('/index.html', url.origin));
    if (!asset.ok) return asset;
    const html = localizeHtml(await asset.text(), url.pathname);
    return new Response(request.method === 'HEAD' ? null : html, {
      status: pageInfo(url.pathname).isHome ? 200 : 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Language': pageInfo(url.pathname).language },
    });
  },
};
