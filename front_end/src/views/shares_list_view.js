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
    tableRow.appendChild(number);

    var price = document.createElement('td');
    var priceNumber = parseFloat(element.price);
    price.innerText = priceNumber.toFixed(2);
    tableRow.appendChild(price);
<<<<<<< HEAD
=======

    var total = document.createElement('td');
    total.innerText = element.totalValue.toFixed(2);
    tableRow.appendChild(total);
>>>>>>> f59c4dd08f326f083e41e2dd7431b1cb077fdf4b
  }.bind(this));
};

module.exports = SharesListView;
