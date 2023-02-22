function sendGreetings(client, to) {
    const message = 'Olá, tudo bem?';
    client.sendText(to, message);
  }
  
  module.exports = sendGreetings;