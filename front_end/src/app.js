const Request = require('./services/request.js');
const TransactionList = require('./models/transaction_list.js');
const Prices = require('./models/prices.js');

var getPrices = function(transactionList) {
  var prices = new Prices(transactionList);
  prices.onUpdate = function(responseBody) {
    console.log(responseBody);
  }
  prices.getCompanyPrices();
  console.log(prices);
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
