importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "my-project",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.36246107b17ec826840b.js",
    "revision": "e6205e027aca8173c2eef21169d41ac9"
  },
  {
    "url": "/_nuxt/layouts/default.3b7aacc9504800184176.js",
    "revision": "2abd5d679de0d92fe7874d880655f2bf"
  },
  {
    "url": "/_nuxt/manifest.6fee19f1c281370766ac.js",
    "revision": "052cfc0180816646f1e7a3d812d6365f"
  },
  {
    "url": "/_nuxt/pages/index.f8782dd0b6b0a38248ed.js",
    "revision": "ff8bbefa0d7521c12c9d09e2e22fac10"
  },
  {
    "url": "/_nuxt/vendor.b5482c66b857afdc5018.js",
    "revision": "a1b834f74593ee493656b6926b4036bf"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

