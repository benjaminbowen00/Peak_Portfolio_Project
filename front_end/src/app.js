const Request = require('./services/request.js');

const app = function() {
  var request = new Request('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=UD3TIRGG5C6BZWPC');
  request.get(function(responseText) {
    console.log(responseText);
  })
}

document.addEventListener('DOMContentLoaded', app);
