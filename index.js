var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'client')));

var stocks = ["AAPL","GOOGL"];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function(socket){
  io.emit('add stock', stocks);
  socket.on('add stock', function(stock){
    stocks.push(stock);
    io.emit('add stock', stocks);
  });
});

http.listen(process.env.PORT || 3000);