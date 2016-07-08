angular
  .module('StockMarket')
  .factory('StockService', ['$http', function($http) {

    return {
      getStocks : function(stocks) {
        $http({
          method: 'GET',
          url: 'http://api.kibot.com?action=login&user=guest&password=guest'
        }).then(function successCallback(r) {
            $http.jsonp('http://api.kibot.com/?action=history&symbol=AAPL&interval=daily&period=30')
            .then(function successCallback(response) {
              console.log(response)
              return response
            }, function errorCallback(response) {
              console.log(response)
              return response
            });
          }, function errorCallback(r) {
          });
   
      }
    }     
}]);