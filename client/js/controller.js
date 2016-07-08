angular
  .module('StockMarket')
  .controller('AppController', ['$scope', 'StockService', function($scope, StockService) {
    var socket = io();
    
    $scope.stocks = [];
    
    socket.on('add stock', function(stocks){
      $scope.stocks = StockService.getStocks(stocks);
      console.log(StockService.getStocks($scope.stocks))
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