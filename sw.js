const CACHE_NAME = 'cybereye-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js',
  'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh_solution_packed_assets_loader.js',
  'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh_solution_simd_wasm_bin.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});