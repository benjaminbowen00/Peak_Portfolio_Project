const Request = require('./services/request.js');
const ticker = document.location.href.split("/").pop();
const APIKey = require('./services/api_key.js');
const StockLineChart = require('./views/stock_line_chart.js')


var app = function() {
  var apiKey = new APIKey();
  var priceUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + ticker + '&apikey=' + apiKey.apiKey;
  var priceRequest = new Request(priceUrl);
  priceRequest.get(function(responseBody) {
    var stockChart = new StockLineChart(responseBody);
  })

  var transactionRequest = new Request('http://localhost:5000/api/transactions');
  transactionRequest.get();

  var newsRequest = new Request('https://api.iextrading.com/1.0/stock/' + ticker + '/news/last/5');
  newsRequest.get();
};

document.addEventListener('DOMContentLoaded', app);
