const Request = require('./services/request.js');

const app = function() {
  var transactionList = new TransactionList('http://localhost:5000/api/transactions');
  transactionList.onUpdate = function(responseBody){
    console.log(this);
    this.transactions = responseBody;
    console.log(this.transactions);
  }
  transactionList.getTransactions();
};

document.addEventListener('DOMContentLoaded', app);
