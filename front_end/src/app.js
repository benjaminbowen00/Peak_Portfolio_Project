const Request = require('./services/request.js');
const TransactionList = require('./models/transaction_list.js');
const Portfolio = require('./models/portfolio.js');
const SharesListView = require('./views/shares_list_view.js');

var getPrices = function(transactionList) {
  var portfolio = new Portfolio(transactionList);
  portfolio.onUpdate = updatePortfolioShares.bind(portfolio);
  portfolio.getCompanyPrices();
};

var updatePortfolioShares = function(responseBody) {
  var array = responseBody["Stock Quotes"];
  this.setSharesArray(array);
  var sharesListView = new SharesListView(this);
  sharesListView.buildTable();
};

var getResponse = function(responseBody) {
  this.transactions = responseBody;
  getPrices(this);
};

const app = function() {
  var transactionList = new TransactionList('http://localhost:5000/api/transactions');
  transactionList.onUpdate = getResponse.bind(transactionList);
  transactionList.getTransactions();
};

document.addEventListener('DOMContentLoaded', app);
