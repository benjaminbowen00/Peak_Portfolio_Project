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

  // console.log(completeCompaniesList.companies);
  // return completeCompaniesList.companies
};

ModalBox.prototype.buildDatalistBox = function (data) {

  console.log(this.companiesList);
  console.log("bulddataBox");
  // var modalContentDiv = document.createElement('div');
  var datalistCompanies = document.querySelector('#companies');

  data.forEach(function(company){
    var option = document.createElement('option');
    option.value = company.name;
    datalistCompanies.appendChild(option);
  })

  var savePurchase = function(){
    var selectedCompanyElement = document.querySelector('#selected-company')
    var numberOfSharesElement = document.querySelector('#number-of-shares')
    var outputString = "You bought "+numberOfSharesElement.value+ " shares in "+selectedCompanyElement.value
    console.log(outputString);
  }

  var savePurchaseButton = document.querySelector('#save-purchase-button');
  savePurchaseButton.addEventListener('click', savePurchase)

}
module.exports = ModalBox;
