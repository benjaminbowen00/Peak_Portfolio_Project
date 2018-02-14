const Request = require('./services/request.js');
const ticker = document.location.href.split("/").pop();
const APIKey = require('./services/api_key.js');
const StockLineChart = require('./views/stock_line_chart.js')
const NewsContainer = require('./views/news_container.js')


var app = function() {
  var apiKey = new APIKey();
  var priceUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + ticker + '&apikey=' + apiKey.apiKey;
  var priceRequest = new Request(priceUrl);
  priceRequest.get(function(responseBody) {
    var stockChart = new StockLineChart(responseBody);
  })

  var transactionRequest = new Request('http://localhost:5000/api/transactions');
  transactionRequest.get(function(responseBody) {
  });

  var newsDiv = document.querySelector('#news-container-row');
  var newsContainer = new NewsContainer(newsDiv);
  var newsRequest = new Request('https://api.iextrading.com/1.0/stock/' + ticker + '/news/last/5');
  var callback = newsContainer.render.bind(newsContainer);
  newsRequest.get(callback);
};

document.addEventListener('DOMContentLoaded', app);
