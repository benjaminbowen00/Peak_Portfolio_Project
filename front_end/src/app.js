const Request = require('./services/request.js');
const TransactionList = require('./models/transaction_list.js');
const Portfolio = require('./models/portfolio.js');
const SharesListView = require('./views/shares_list_view.js');
const PieChart= require('./views/pie_chart.js');
const TotalView = require('./views/total_view.js');
const autocomplete = require('./views/modal_box.js');
const Transaction = require('./models/transaction.js');
const ModalBox = require('./views/modal_box.js');

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
  var pieChart = new PieChart(this);
  var portfolioTotalView = new TotalView(this);
  portfolioTotalView.showTotal();
};

var getResponse = function(responseBody) {
  this.transactions = responseBody;
  getPrices(this);
};

const app = function() {
  var transactionList = new TransactionList('http://localhost:5000/api/transactions');
  transactionList.onUpdate = getResponse.bind(transactionList);
  transactionList.getTransactions();

  // autocomplete(document.getElementById('sharesInput'), ['Apple', 'Microsoft']);

  // Gets the modal (loads on the main webpage)
  var modal = document.getElementById('modalPorfolioUpdate');

  // Gets the button that opens the modal (loads on the main webpage)
  var btn = document.getElementById("openModalBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // onClick button opens the modal
  btn.onclick = function() {
      modal.style.display = "block";
      var modalBoxDiv = document.querySelector('#datalist-div');
      var modalBox = new ModalBox(modalBoxDiv);
      modalBox.getCompaniesList();

  }

  // this is the 'x' in the top corner and closes the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // This shuts the modal if the user clicks anywhere else on the page.
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

};

document.addEventListener('DOMContentLoaded', app);
