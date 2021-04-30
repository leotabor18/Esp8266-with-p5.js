let express = require('express');
let socket = require('socket.io');
let app =  express();
let server = app.listen(3000);
let socketIo = socket(server);

console.log("Connected!");

app.use(express.static('public'));

// app.get('/level/:data', function (req, res){
    
//     let d = req.params.data;
//     console.log(d);
    socketIo.sockets.on('connection', socket => {
        console.log("Connected: "+socket.id);
        // socket.on('message1', data => {
        //     console.log(data);
            
            socket.emit('sendData' , "Hello client");
            socket.on('message', data => {
                console.log(data);
                socket.broadcast.emit('result' , data);
            });
        });
        
    // });
