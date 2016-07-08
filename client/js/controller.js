angular
  .module('StockMarket')
  .controller('AppController', ['$scope', 'StockService', function($scope, StockService) {
    var socket = io();
    
    $scope.stocks = [];
    
    socket.on('add stock', function(stocks) {
      console.log(stocks)
      $scope.stocks = StockService.getStocks(stocks).list.resources;
      console.log(StockService.getStocks($scope.stocks))
      $scope.$digest();
    });
      
    $scope.addStock = function() {
      socket.emit('add stock', $scope.stockSymbol);
      $scope.stockSymbol = '';
    }
}]);