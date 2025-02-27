const CACHE_NAME = 'cruzadas-v1';
const ASSETS = [
  '/silabasCruzadas/',                  // Página raiz do subdiretório
  '/silabasCruzadas/index.html',
  '/silabasCruzadas/manifest.json',     // Adicione o manifest.json aqui
  '/silabasCruzadas/jogo.html',
  '/silabasCruzadas/lista.html',
  '/silabasCruzadas/style.css',
  '/silabasCruzadas/script.js',
  '/silabasCruzadas/cruzadas.js',
  '/silabasCruzadas/img/borracha.png',
  '/silabasCruzadas/img/config.png',
  '/silabasCruzadas/img/config1.png',
  '/silabasCruzadas/img/home.png',
  '/silabasCruzadas/img/quad.png',
  '/silabasCruzadas/img/seta-para-baixo.png',
  '/silabasCruzadas/img/seta-para-cima.png',
  '/silabasCruzadas/img/seta-para-direita.png',
  '/silabasCruzadas/img/seta-para-esquerda.png',
  '/silabasCruzadas/img/visao.png',
  '/silabasCruzadas/img/icon-192x192.png',  // Ícone 192x192
  '/silabasCruzadas/img/icon-512x512.png',  // Ícone 512x512
  // Adicione aqui outros arquivos que deseja armazenar em cache
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
