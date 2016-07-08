angular
  .module('StockMarket')
  .controller('AppController', ['$scope', 'StockService', function($scope, StockService) {
    var socket = io();
    
    $scope.stocks = [];
    
    socket.on('add stock', function(stock){
      $scope.stocks = stock;
      StockService.getStocks($scope.stocks);
      $scope.$digest();
    });
      
      
      
      /*
      $("#addStock").click(function(){
        socket.emit('add stock', $('#stockCode').val());
        $('#stockCode').val('');
        return false;
      });
      
      
      */
  
  }]);