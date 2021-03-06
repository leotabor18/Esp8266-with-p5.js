let express = require('express');
let socket = require('socket.io');
let app =  express();
let server = app.listen(3000);
let socketIo = socket(server);

console.log("Connected!");

app.use(express.static('public'));

socketIo.sockets.on('connection', socket => {
    console.log("Connected: "+socket.id);
    socket.emit('sendData' , "Connected to server");
    socket.on('message', data => {
        console.log(data);
        socket.broadcast.emit('result' , data);
    });
});
