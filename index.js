const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// const exp = require('express').createServer();

// app.createServer();

// const http = require('http').Server(app);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
