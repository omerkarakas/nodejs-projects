const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

wss.on('connection', (ws) => {
  console.log('new client came');

  ws.on('message', (data) => {
    console.log(`Client sent : ${data}`);

    //console.log(data);
    ws.send(
      'No Client! Please use uppercase like this: ' + String(data).toUpperCase()
    );
  });

  ws.on('close', () => {
    console.log('client gone');
  });
});
