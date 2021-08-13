self.serviceWorker.addEventListener('fetch', (event) => {
  console.log("aaaa")
  event.respondWith(null);
});