const ModalBoxRemove = require('./modal_box_remove');


const SharesListView = function(portfolio) {
  this.portfolio = portfolio;
}

SharesListView.prototype.buildTable = function() {
  var table = document.querySelector("#shares-list");

  this.portfolio.sharesArray.forEach(function(element) {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var companyName = document.createElement('td');
    var name = this.portfolio.getCompanyName(element.name);
    companyName.innerText = name;
    tableRow.appendChild(companyName);

    var companyTicker = document.createElement('td');
    companyTicker.innerText = element.name;
    tableRow.appendChild(companyTicker);

    var number = document.createElement('td');
    number.innerText = element.number;
    number.setAttribute("class", "number-font");
    tableRow.appendChild(number);

    var price = document.createElement('td');
    var priceNumber = parseFloat(element.price);
    price.setAttribute("class", "number-font");
    price.innerText = priceNumber.toFixed(2);
    tableRow.appendChild(price);

    var total = document.createElement('td');
    total.setAttribute("class", "number-font");
    total.innerText = element.totalValue.toFixed(2);
    tableRow.appendChild(total);

    var removeShareTd = document.createElement('td');
    var removeShareLink = document.createElement('a');
    removeShareLink.setAttribute("class", "remove-share-x")
    removeShareLink.innerHTML = "&times;";
    removeShareLink.addEventListener('click',function(){
      modalRemoveShares = document.querySelector('#modalRemoveShares');
      modalBoxRemove = new ModalBoxRemove(modalRemoveShares, this.portfolio);
      modalBoxRemove.buildBox(element.name);
    }.bind(this) )
    removeShareTd.appendChild(removeShareLink);
    tableRow.appendChild(removeShareTd);
  }.bind(this));
}

module.exports = SharesListView;
