// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    
    switch (String(message.body).toUpperCase()) {
        case 'HI' :

        client
        .sendText(message.from, '====== MENU ====== \n \n 1. OPÇÃO \n \n 2. OPÇÃO \n \n 3. OPÇÃO')
            break;
    
        default: 
            if(message.body === '1' ){
                client
                    .sendText(message.from, 'Bem Vindo ao menu 1')
            }else if (message.body === '2'){
                client
                    .sendText(message.from, 'Bem Vindo ao menu 2')
            }else if(message.body === '3'){
                client
                    .sendText(message.from, 'Bem vindo ao menu 3')
            }

            break;
    }


  });
}








