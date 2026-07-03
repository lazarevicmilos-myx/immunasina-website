import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: request => {
        const url = new URL(request.url);
        // If the request is for the root, serve index.html
        if (url.pathname === '/') {
          return new Request(`${url.origin}/index.html`, request);
        }
        // Otherwise, serve the requested asset
        return mapRequestToAsset(request);
      },
    });
  } catch (e) {
    // If the asset is not found, try to serve index.html for client-side routing
    const pathname = new URL(event.request.url).pathname;
    if (pathname.includes('.')) {
      // If the request is for a file (e.g., .js, .css, .png), and it's not found, return 404
      return new Response(`'${pathname}' not found`, { status: 404 });
    } else {
      // For other paths (e.g., /about, /products), assume client-side routing and serve index.html
      return getAssetFromKV(event, {
        mapRequestToAsset: request => new Request(`${new URL(request.url).origin}/index.html`, request),
      });
    }
  }
}
