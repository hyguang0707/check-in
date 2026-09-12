self.addEventListener('fetch', (event) => {
  // 保持基本請求通過，滿足 PWA 條件
  event.respondWith(fetch(event.request));
});