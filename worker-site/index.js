import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

const assetManifest = JSON.stringify(globalThis.__CF_ASSET_MANIFEST || {});

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: request => {
        const url = new URL(request.url);
        let mappedRequest = request;

        // If the request is for the root, serve index.html
        if (url.pathname === '/') {
          mappedRequest = new Request(`${url.origin}/index.html`, request);
        } else {
          // Otherwise, serve the requested asset
          mappedRequest = mapRequestToAsset(request);
        }

        // Determine content type based on file extension
        const extension = mappedRequest.url.split(".").pop();
        let contentType = "application/octet-stream"; // Default

        switch (extension) {
          case "js":
            contentType = "application/javascript";
            break;
          case "css":
            contentType = "text/css";
            break;
          case "html":
            contentType = "text/html";
            break;
          case "json":
            contentType = "application/json";
            break;
          case "png":
            contentType = "image/png";
            break;
          case "jpg":
          case "jpeg":
            contentType = "image/jpeg";
            break;
          case "gif":
            contentType = "image/gif";
            break;
          case "svg":
            contentType = "image/svg+xml";
            break;
          case "ico":
            contentType = "image/x-icon";
            break;
          // Add more cases as needed for other asset types
        }

        const headers = new Headers(mappedRequest.headers);
        headers.set("Content-Type", contentType);

        return new Request(mappedRequest.url, { ...mappedRequest, headers });
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
