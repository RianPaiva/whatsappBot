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
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Olá, seja bem vindo ao PaivaBot')        
        .then((result) => {

          client.sendText(message.from, '====== MENU ====== \n \n 1. OPÇÃO \n \n 2. OPÇÃO \n \n 3. OPÇÃO') 



          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }else{
      if (message.body !== 'Hi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Algo de errado não está certo')        
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    }
  });
}

