const APIKey = require('../services/api_key.js');
const Request = require('../services/request.js');

const Portfolio = function(transactionList) {
  this.list = transactionList;
  this.sharesArray = [];
  this.companiesList = this.getCompanies();
  this.onUpdate = null;
};

Portfolio.prototype.getCompanyPrices = function() {
  console.log(this.buildURL());
  var request = new Request(this.buildURL());
  request.get(this.onUpdate);
};

Portfolio.prototype.getCompanies = function() {
  var array = ["MSFT", "AAPL"];
  this.list.transactions.forEach(function(element, index) {
    if (!array.includes(element.symbol)) {
      array.push(element.symbol);
    }
  })
  return array;
};

Portfolio.prototype.buildURL = function() {
  var commaList = this.companiesList.join(",");
  var apiKey = new APIKey();
  var url = "https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=" + commaList + "&apikey=" + apiKey.apiKey
  return url;
};

Portfolio.prototype.setSharesArray = function(array) {
  this.sharesArray = array.map(function(element){
    return object = {
      name: element["1. symbol"],
      price: element["2. price"]
    }
})
  this.getStockNumberAndTotal();
};

Portfolio.prototype.getStockNumberAndTotal = function() {
  this.sharesArray.forEach(function(quote){
    var total = 0;
    this.list.transactions.forEach(function(transaction) {
      if (quote.name === transaction.ticker) {
        total += transaction.number;
      }
    }.bind(this));
    quote.number = total;
    quote.totalValue = total * quote.price;
  }.bind(this))
}

module.exports = Portfolio;
