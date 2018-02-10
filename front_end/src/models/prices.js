const APIKey = require('../services/api_key.js');
const Request = require('../services/request.js');

const Prices = function(transactionList) {
  this.list = transactionList;
  this.prices = [];
  this.companiesList = this.getCompanies();
  this.onUpdate = null;
};

Prices.prototype.getCompanyPrices = function() {
  console.log(this.buildURL());
  var request = new Request(this.buildURL());
  request.get(this.onUpdate);
};

Prices.prototype.getCompanies = function() {
  var array = ["MSFT", "AAPL"];
  this.list.transactions.forEach(function(element, index) {
    if (!array.includes(element.symbol)) {
      array.push(element.symbol);
    }
  })
  return array;
};

Prices.prototype.buildURL = function() {
  var commaList = this.companiesList.join(",");
  var apiKey = new APIKey();
  var url = "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=" + commaList + "&apikey=" + apiKey.apiKey
  return url;
};

module.exports = Prices;
