const Request = require('./services/request.js');
const ticker = document.location.href.split("/").pop();
const APIKey = require('./services/api_key.js')


var app = function() {
  var apiKey = new APIKey();
  var priceUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + ticker + '&apikey=' + apiKey.apiKey;
  var priceRequest = new Request(priceUrl);
  priceRequest.get()

};

document.addEventListener('DOMContentLoaded', app);
