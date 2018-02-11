const SharesListView = function(portfolio) {
  this.portfolio = portfolio;
}

SharesListView.prototype.buildTable = function() {
  var table = document.querySelector("#shares-list");

  this.portfolio.sharesArray.forEach(function(element) {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var companyName = document.createElement('td');
    console.log(this.portfolio);
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
    price.innerText = element.price;
    tableRow.appendChild(price);
  }.bind(this));
}

module.exports = SharesListView;
