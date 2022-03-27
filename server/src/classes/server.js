const messageDB = require("./messageDB.js");

const express = require("express");
const {createServer} = require("http");
const port = process.env.PORT || 5000;

expressApp = express();
httpServer = createServer(expressApp);

httpServer.listen(port || 5000, () => console.log(`listening on http://localhost:${port}`) );

module.exports =  class Server{
    constructor (){
        this.io = require('socket.io')(httpServer, {
            cors: { origin: "*" }
          });

        this.userCount = 0;
        this.messageDBInstance = new messageDB();


        this.io.on('connection', (socket) => {
            this.userCount++;
            console.log('a user connected', this.userCount);
            this.io.emit('userCount', this.userCount);
            
            socket.on('joining', (data) => {
                console.log("This id: ", data.id);
                this.io.to(socket.id).emit('allMessages', this.messageDBInstance.getAllMessages());
            });
            
            socket.on('message', (message) => {
                this.messageDBInstance.addMessage(message);
                this.io.emit('newMessage', message);
            });
            
            socket.on('disconnect', ()=>{
                console.log("a user disconnected");
                this.userCount--;
                this.io.emit('userCount', this.userCount);
                if (this.userCount === 0){
                this.messageDBInstance.close()
                }
            })
        });
    }
}

