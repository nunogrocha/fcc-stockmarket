angular
  .module('StockMarket')
  .factory('StockService', function($http) {

    return {
      getStocks : function(stocks) {
        return $http.jsonp('https://finance.yahoo.com/webservice/v1/symbols/' + stocks.join() + '/quote', {
          params: {
            callback: 'JSON_CALLBACK',
            format: 'json',
            view: 'detail'
          }
        }).success(function(response) {
          console.log(response);
          return response;
        }).catch(function(response) {
          console.log(response);
          return response;
        });
      }
    }     
});