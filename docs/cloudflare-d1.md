# Product interest: Cloudflare D1 setup

The form sends JSON to `POST /api/product-interest` in the existing `immunasina` Worker. It saves to D1 through the `DB` binding. It does not need MySQL, `DATABASE_URL`, an API token in the browser, or the old Express/tRPC order endpoint. No emails are sent automatically; contact customers separately when products launch.

## One-time production setup

1. In the Cloudflare dashboard, open **Storage & databases → D1** and create a database named **immunasina-interest**. Copy its database ID.
2. In `wrangler.toml`, replace the all-zero `database_id` under `[[d1_databases]]` with that ID. Keep `binding = "DB"`, `database_name = "immunasina-interest"`, and `migrations_dir = "d1/migrations"`. Commit the real ID with the configuration; a database ID is not a secret.
3. From the project directory, authenticate and create the table in the remote database:

   ```sh
   npx wrangler login
   npm run d1:migrate:remote
   ```

4. Build and deploy the Worker and frontend:

   ```sh
   npm run build
   npm run deploy
   ```

   Wrangler creates the `DB` binding from `wrangler.toml`. You do not need to add a second binding manually in the dashboard. After deployment, verify **Workers & Pages → immunasina → Bindings** shows D1 binding **DB** pointing to **immunasina-interest**. If using Git-connected Cloudflare Builds, commit the database ID before its next deployment; apply the remote migration before deploying the new form.

5. Submit a test registration on the live site. The thank-you message appears only after D1 confirms the write. Open the database's **Console** and run:

   ```sql
   SELECT id, product_id, full_name, email, country, notes, language, created_at, updated_at
   FROM product_interest
   ORDER BY updated_at DESC;
   ```

Alternatively, create the database with `npx wrangler d1 create immunasina-interest` instead of dashboard step 1, then copy its returned ID into the existing binding block. Do not add a duplicate binding. If you cannot run the migration command, execute the SQL in `d1/migrations/0001_product_interest.sql` in the D1 dashboard Console before deploying; the migration uses `IF NOT EXISTS` so the Wrangler migration can still be applied later.

## Stored data

One row per normalized email address and product. Repeat registration updates name, country, notes, language, and `updated_at`; `created_at` is preserved. Dates are UTC. Product IDs: `latte` (Rtanj Latte Wild), `matcha` (Rosehip & Matcha Latte), `protein` (Bio-Active Protein Shake), `shake` (Gentle Vitality Blend). No payment information or order commitments are recorded. The public API only accepts submissions; it does not expose customer records.

## Local development

Use Node.js 22.13+ (Node 24 recommended for the SQLite tests).

```sh
npm run d1:migrate:local
npm run dev:cloudflare
```

Open the URL Wrangler prints (normally `http://localhost:8787`). The local database lives under ignored `.wrangler/` and is separate from production. Re-run `dev:cloudflare` after frontend changes to rebuild assets. The existing `npm run dev` starts the legacy Express server, which does not provide this D1 endpoint; use the Cloudflare command to test this form.

## Troubleshooting

- **503:** verify the `DB` binding and apply the migration to the same remote database. Missing binding or failed writes never return a success confirmation.
- **400:** check name, valid email, country, supported product/language, and optional notes (maximum 2,000 characters).
- **404 / HTML instead of JSON:** ensure the deployed entry point is `worker-site/index.js` and `run_worker_first = true` remains configured.
- The all-zero database ID is a setup placeholder, not a provisioned remote database. Replace it before deploying.

References: [Cloudflare D1 setup](https://developers.cloudflare.com/d1/get-started/), [D1 migrations](https://developers.cloudflare.com/d1/reference/migrations/), [Worker asset routing](https://developers.cloudflare.com/workers/static-assets/binding/).
