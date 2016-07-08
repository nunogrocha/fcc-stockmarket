angular
  .module('StockMarket')
  .factory('StockService', ['$http', function($http) {

    return {
      getStocks : function(stocks) {
        $http({
          method: 'GET',
          url: 'http://finance.yahoo.com/webservice/v1/symbols/AAPL,GOOGL/quote?format=json&view=detail'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is 
            console.log(response)
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response)
          });
      }
      
    }     
}]);