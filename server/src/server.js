const {write, read } = require('./controllers/storage-utils');
const express = require("express");
const {createServer} = require("http");
const port = process.env.PORT || 5000;


const app = express();
const httpServer = createServer(app);

const io = require('socket.io')(httpServer, {
  cors: { origin: "*" }
});

let count = 0;
const messageDB = read();

io.on('connection', (socket) => {
  count++;
  console.log('a user connected', count);
  io.emit('userCount', count);

  socket.on('joining', (data) => {
    console.log("This id: ", data.id);
    io.to(socket.id).emit('allMessages', messageDB);
  });

  socket.on('message', (message) => {
    messageDB.push(message);
    io.emit('newMessage', message);
    console.log(messageDB);
  });

  socket.on('disconnect', ()=>{
    console.log("a user disconnected");
    count--;
    io.emit('userCount', count);
    if (count === 0){
      write(messageDB)
    }
  })
});

httpServer.listen(port || 5000, () => console.log(`listening on http://localhost:${port}`) );
