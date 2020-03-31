console.log('Service Worker prro')

self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data)
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://i.ya-webdesign.com/images/golang-vector-icon-6.png'
    }) 
})