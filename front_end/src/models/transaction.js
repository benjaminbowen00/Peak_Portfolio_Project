const Request = require('../services/request.js');
const APIKey = require('../services/api_key.js');
const Materialize = require('materialize-css')

const Transaction = function(name, ticker, number) {
  this.name = name;
  this.ticker = ticker;
  this.purchase_price = 0;
  this.number = number;
};

Transaction.prototype.getPrice = function() {
  var apiKey = new APIKey();
  var request = new Request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + this.ticker + '&interval=1min&apikey=' + apiKey.apiKey);
  request.get(this.updatePrice.bind(this));
};

Transaction.prototype.updatePrice = function(responseBody) {
  var priceData = responseBody["Time Series (1min)"];
  var price = priceData[0];
  this.purchase_price = price["4. close"];
  this.save();
};

Transaction.prototype.save = function() {
  var request = new Request('http://localhost:5000/api/transactions');
  request.post(this.toast.bind(this), this);
};

Transaction.prototype.toast = function() {
  Materialize.toast('Transaction saved!', 4000);
};
