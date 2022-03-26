const socket = io("ws://localhost:5000");

// send a message to the server
socket.emit("hello from client");

// receive a message from the server
socket.on("hello from server", (...args) => {
  // ...
});


document.querySelector('button').onclick = ()=>{
    socket.emit('message', "hello from client");
    console.log("I am pressed");
}