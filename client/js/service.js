angular
  .module('StockMarket')
  .factory('StockService', ['$http', function($http) {

    return {
      /*getStocks : function(stocks) {
        $http({
          method: 'GET',
          url: 'https://finance.yahoo.com/webservice/v1/symbols/' + stocks.join() + '/quote?format=json&view=detail'
        }).then(function successCallback(response) {
          return response;
        }, function errorCallback(response) {
          return response;
        });
      }*/
      getStocks : function(stocks) {
        return JSON.parse('{"list" :{"meta" :{"type" : "resource-list","start" : 0,"count" : 2},"resources" : [{"resource" :{"classname" : "Quote","fields" :{"change" : "0.729996","chg_percent" : "0.760888","day_high" : "96.889999","day_low" : "96.050003","issuer_name" : "Apple Inc.","issuer_name_lang" : "Apple Inc.","name" : "Apple Inc.","price" : "96.669998","symbol" : "AAPL","ts" : "1468005847","type" : "equity","utctime" : "2016-07-08T19:24:07+0000","volume" : "21825958","year_high" : "132.970000","year_low" : "89.470000"}}},{"resource" :{"classname" : "Quote","fields" :{"change" : "10.000000","chg_percent" : "1.413907","day_high" : "717.510010","day_low" : "708.500000","issuer_name" : "Alphabet Inc.","issuer_name_lang" : "Alphabet Inc.","name" : "Alphabet Inc.","price" : "717.260010","symbol" : "GOOGL","ts" : "1468005819","type" : "equity","utctime" : "2016-07-08T19:23:39+0000","volume" : "1107372","year_high" : "810.350000","year_low" : "552.000000"}}}]}}');
      }
    }     
}]);