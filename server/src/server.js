const express = require("express");
const {createServer} = require("http");
const port = 5000


const app = express();
const httpServer = createServer(app);

const io = require('socket.io')(httpServer, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  

  socket.on('message', (message) =>     {
      console.log(message);
      io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
  });

  socket.on('disconnect', ()=>{
    console.log("a user disconnected");
  })
});

httpServer.listen(port, () => console.log(`listening on http://localhost:${port}`) );
