const CompaniesList = require('../models/companies_list.js');
const Transaction = require('../models/transaction.js');

var ModalBoxRemove = function(container, portfolio) {
  this.container = container;
  this.portfolio = portfolio;
};

ModalBoxRemove.prototype.buildBox = function(name) {
  removeSharesDiv = document.querySelector('#remove-shares-div');
  removeSaveButton = document.querySelector('#remove-save')
  pCompanyName = document.createElement('p');
  selectedCompanyName = this.portfolio.getCompanyName(name);
  pCompanyName.innerText = selectedCompanyName;
  removeSharesDiv.appendChild(pCompanyName);
  modalRemoveShares.style.display = "block";

  var getTickerFromCompanyName = function(company){
    var ticker = null;
    this.portfolio.list.transactions.forEach(function(companyFromList){
      if (companyFromList.name === company){
        ticker = companyFromList.ticker;
      }
    })
    return ticker;
  }
  var selectedTicker = getTickerFromCompanyName(selectedCompanyName);

  var saveRemovedShares = function(){

  var numberOfSharesToRemove = document.querySelector('#number-of-shares-remove').value * -1;

  var transaction = new Transaction(selectedCompanyName, selectedTicker, numberOfSharesToRemove);
  transaction.getPrice();
  }
  removeSaveButton.addEventListener("click", saveRemovedShares)
};

module.exports = ModalBoxRemove;
