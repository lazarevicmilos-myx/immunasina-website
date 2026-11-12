import { productInterestSchema } from '../shared/productInterest.ts';

const json = (body, status) => Response.json(body, {
  status,
  headers: { 'Cache-Control': 'no-store' },
});

export async function submitProductInterest(request, env) {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  }
  const origin = request.headers.get('Origin');
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: 'Forbidden' }, 403);
  }
  if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') {
    return json({ error: 'Expected JSON' }, 415);
  }

  // Limit actual bytes read, including requests without Content-Length.
  let data;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ error: 'Missing body' }, 400);
    const chunks = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16384) {
        await reader.cancel();
        return json({ error: 'Request too large' }, 413);
      }
      chunks.push(value);
    }
    data = JSON.parse(await new Blob(chunks).text());
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }
  const parsed = productInterestSchema.safeParse(data);
  if (!parsed.success) return json({ error: 'Invalid form fields' }, 400);
  if (!env.DB) return json({ error: 'Service unavailable' }, 503);

  const { productId, fullName, email, country, notes, language } = parsed.data;
  try {
    const result = await env.DB.prepare(`
      INSERT INTO product_interest (product_id, full_name, email, country, notes, language)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(email, product_id) DO UPDATE SET
        full_name = excluded.full_name, country = excluded.country,
        notes = excluded.notes, language = excluded.language,
        updated_at = CURRENT_TIMESTAMP
    `).bind(productId, fullName, email, country, notes || null, language).run();
    if (!result.success) throw new Error('D1 write failed');
    return json({ success: true }, 200);
  } catch {
    // Do not log customers' personal information or SQL parameters.
    console.error('Product interest could not be saved to D1');
    return json({ error: 'Unable to save interest' }, 503);
  }
}
