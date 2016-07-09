angular
  .module('StockMarket')
  .controller('AppController', ['$scope', 'StockService', '$sce', function($scope, StockService, $sce) {
    google.charts.load('current', {'packages':['bar']});
    var socket = io();
    var options = {
      chart: {
        title: "Stock Values",
        subtitle: 'Latest Stock Trade Value in Dollars'
      },
        legend: { position: "none" },
        bars: 'horizontal' 
    };
    var chartData = [["Symbol", "Value"]];
    $scope.stocks = [];
    $scope.loading = true;
    
    socket.on('add stock', function(stocks) {
      $scope.loading = true;
      console.log(stocks)
      var promise = StockService.getStocks(stocks);
      promise.then(
        function(payload) {
          $scope.stocks = payload.data.list.resources;
          chartData = [["Symbol", "Value"]];
          $scope.stocks.forEach(function(item){
            chartData.push([item.resource.fields.symbol, {v: parseInt(item.resource.fields.price), f: '$' + item.resource.fields.price}]);
          });
          google.charts.setOnLoadCallback(drawChart);
          $scope.loading = false;
        }
      );
    });
      
    $scope.addStock = function() {
      socket.emit('add stock', $scope.stockSymbol);
      $scope.stockSymbol = '';
    }
    
    $scope.removeStock = function(stock) {
      socket.emit('remove stock', stock);
    }
    
    $scope.getChange = function(change) {
      if(change > 0) {
        return $sce.trustAsHtml('Change: <span style="color:green">+' + change + '%</span>');
      }
      return $sce.trustAsHtml('Change: <span style="color:red"> ' + change + '%</span>');
    }
    
    function drawChart() {
      var data = google.visualization.arrayToDataTable(chartData);
      var chart = new google.charts.Bar(document.getElementById('graphAppend'));
      chart.draw(data, options);
    }
    
}]);