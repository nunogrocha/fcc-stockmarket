angular
  .module('StockMarket')
  .controller('AppController', ['$scope', 'StockService', function($scope, StockService) {
    var socket = io();
    
    $scope.stocks = [];
    
    socket.on('add stock', function(stocks) {
      console.log(stocks)
      var promise = StockService.getStocks(stocks);
      promise.then(
        function(payload) {
          $scope.stocks = payload.data.list.resources;
        }
      );
    });
      
    $scope.addStock = function() {
      socket.emit('add stock', $scope.stockSymbol);
      $scope.stockSymbol = '';
    }
}]);