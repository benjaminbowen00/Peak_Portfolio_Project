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

  // var mycompanies = ["apple", "Microsoft", "IBM"];
  // var mycompanies = new CompaniesList();
  // mycompanies.getCompanies();

  data.forEach(function(company){
    var option = document.createElement('option');
    option.value = company.name;
    datalistCompanies.appendChild(option);

  })



  // var inputTag = document.createElement('input');
  // var labelTag = document.createElement('label');
  // var datalist = document.createElement('DATALIST');
  // console.log(datalist);
  // console.log(this.companiesList);
  // var option = document.createElement('option');
  // console.log(option);
  // option.value = "hello"
  // datalist.appendChild(option);


  // this.companiesList.forEach(function(company){
  //   var option = document.createElement('option');
  //   option.innerText = company.name;
  //   console.log(option);
  //   datalist.appendChild(option);
  // });

  // datalistDiv.appendChild(datalist);



  // this.container.innerHTML = ""
}
module.exports = ModalBox;
