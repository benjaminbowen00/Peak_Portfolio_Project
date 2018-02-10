const Request = require('./services/request.js');
const TransactionList = require('./models/transaction_list.js');
const Portfolio = require('./models/portfolio.js');

var getPrices = function(transactionList) {
  var portfolio = new Portfolio(transactionList);
  portfolio.onUpdate = updatePortfolioShares.bind(portfolio);

  portfolio.getCompanyPrices();
};

var updatePortfolioShares = function(responseBody) {
  var array = responseBody["Stock Quotes"];
  this.setSharesArray(array);
};

var getResponse = function(responseBody) {
  console.log(this);
  this.transactions = responseBody;
  console.log(this.transactions);
  getPrices(this);
};

const app = function() {
  var transactionList = new TransactionList('http://localhost:5000/api/transactions');
  transactionList.onUpdate = getResponse.bind(transactionList);
  transactionList.getTransactions();


};

document.addEventListener('DOMContentLoaded', app);
