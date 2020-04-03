self.addEventListener('push', () =>{
    self.registration.sendNotification('test mess', {});
});
