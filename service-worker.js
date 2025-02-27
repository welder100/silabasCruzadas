const CACHE_NAME = 'cruzadas-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json', // Adicione o manifest.json aqui
  '/jogo.html',
  '/lista.html',
  '/style.css',
  '/script.js',
  '/cruzadas.js',
  '/img/borracha.png',
  '/img/config.png',
  '/img/config1.png',
  '/img/home.png',
  '/img/quad.png',
  '/img/seta-para-baixo.png',
  '/img/seta-para-cima.png',
  '/img/seta-para-direita.png',
  '/img/seta-para-esquerda.png',
  '/img/visao.png',
  '/img/icon-192x192.png', // Ícone 192x192
  '/img/icon-512x512.png',
  // Adicione aqui todos os arquivos que deseja armazenar em cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
