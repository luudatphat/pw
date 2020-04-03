var push = require('web-push')

// Cách để lấy publikey vaf privakey
/*let vapiKeys = push.generateVAPIDKeys();
console.log(vapiKeys); */ 

let vapiKeys = {
    publicKey: 'BO7xGYV8gEcHEBspI7BucwwsIZ0SJHhswDIqY--qq5R1ClZpaXctvyblyW1Kd-ws9si7HN-y-ZEmptsyv1oEHPs',
    privateKey: 'xSMy65tWtQWRik_kFKN3mY7Kjc2Vj-vLKaKD0-GvL58'
  }
push.setVapidDetails('mailto:test@code.co.uk', vapiKeys.publicKey, vapiKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test mess')