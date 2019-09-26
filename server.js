// JavaScript Document
var io = require('socket.io').listen(3000);

var userCount = 0;

io.sockets.on('connection', function(socket){

   console.log('a new user connected.');
   userCount++;

   socket.on('mesajgonder', function(data){
      socket.emit('mesajgitti', data);
      socket.broadcast.emit('mesajgitti', data);
   });
   socket.on('typing', function(data){
      socket.emit('typed', data);
      socket.broadcast.emit('typed', data);
   });

   socket.on('disconnect', function() {
      console.log('user disconnected');
      userCount--;
   });

   socket.on('users', function(data) {
      socket.emit('getuser', {'usercount':userCount});
      socket.broadcast.emit('getuser', {'usercount':userCount});
   });
});