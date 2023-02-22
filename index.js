const venom = require('venom-bot');
const sendGreetings = require('./menus/option1.js');


const venomConfig = {
  headless: true,
  useChrome: true,
  debug: false,
  logQR: true,
  browserArgs: ['--no-sandbox'],
  refreshQR: 15000
};

venom.create(venomConfig).then((client) => {
  start(client);
});

function start(client) {
  client.onMessage((message) => {
    switch (message.body) {
      case '1':
        sendGreetings(client, message.from);
        break;
      case '2':
        sendInstructions(client, message.from);
        break;
      case '3':
        sendHelp(client, message.from);
        break;
      default:
        sendMenu(client, message.from);
    }
  });
}

function sendMenu(client, to) {
  const menu = `Menu de opções:
1. Saudações
2. Instruções
3. Ajuda`;

  client.sendText(to, menu);
}

function sendInstructions(client, to) {
  client.sendText(to, 'Para usar este bot, envie o número da opção desejada.');
}

function sendHelp(client, to) {
  client.sendText(to, 'Para obter ajuda, entre em contato com o suporte.');
}



