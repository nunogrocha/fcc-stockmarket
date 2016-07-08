var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var stocks = ["AAPL","GOOGL"];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('add stock', stocks);
  socket.on('add stock', function(stock){
    stocks.push(stock);
    io.emit('add stock', stocks);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});