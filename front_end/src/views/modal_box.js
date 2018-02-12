const CompaniesList = require('../models/companies_list.js');

var ModalBox = function(container) {
  this.container = container;
  this.companiesList = [];
}

ModalBox.prototype.getCompaniesList = function () {
  var completeCompaniesList = new CompaniesList();
  // console.log(completeCompaniesList);
  completeCompaniesList.onLoad = this.buildDatalistBox;
  completeCompaniesList.getCompanies();

  console.log("inside modal box", completeCompaniesList);
};





ModalBox.prototype.buildDatalistBox = function (data) {

  console.log("bulddataBox");
  this.companiesList = data;
  console.log(this.companiesList);
  // var modalContentDiv = document.createElement('div');
  var datalistCompanies = document.querySelector('#companies');

  data.forEach(function(company){
    var option = document.createElement('option');
    option.value = company.name;
    datalistCompanies.appendChild(option);
  })

  var getTickerFromCompanyName = function(company){
    var ticker = null;
    data.forEach(function(companyFromList){
      if (companyFromList.name === company){
        ticker = companyFromList.ticker;
      }
    })

    return ticker;
  }

  var savePurchase = function(){
    console.log("inside savePurchase", this);
    var selectedCompanyElement = document.querySelector('#selected-company')
    var numberOfSharesElement = document.querySelector('#number-of-shares')
    var outputString = `You bought ${numberOfSharesElement.value} shares in ${selectedCompanyElement.value}. The ticker is ${getTickerFromCompanyName(selectedCompanyElement.value)}`
    console.log(outputString);
  }




  var savePurchaseButton = document.querySelector('#save-purchase-button');
  savePurchaseButton.addEventListener('click', savePurchase)

}








module.exports = ModalBox;
