const TransactionTableView = function(transactions){
  this.transactions = transactions;
}

TransactionTableView.prototype.buildTable = function(){
  var table = document.querySelector("#transaction-table");
  table.innerHTML = "";
  table.appendChild(this.createTableHeaders());

  this.portfolio.transactions.forEach(function(element) {
    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    var date = document.createElement('td');
    dateText = this.getDateFromId(element._id);
    date.innerText = dateText;
    tableRow.appendChild(date);

    var numberShares = document.createElement('td');
    numberShares.innerText = element.number;
    tableRow.appendChild(number);

    var purchasePrice = document.createElement('td');
    purchasePrice = element.purchase_price;
    tableRow.appendChild(purchasePrice);
  }

}


TransactionTableView.prototype.createTableHeaders = function() {
  var headerRow = document.createElement('tr');
  var dateHeader = document.createElement('th');
  dateHeader.innerText = "Date purchased";
  var numberHeader = document.createElement('th');
  numberHeader.innerText = "Number of shares";
  var priceHeader = document.createElement('th');
  priceHeader.innerText = "price ($)";


  headerRow.appendChild(dateHeader);
  headerRow.appendChild(numberHeader);
  headerRow.appendChild(priceHeader);
  return headerRow;
}

TransactionTableView.prototype.getDateFromId = function(objectID){
  var date =  new Date(parseInt(objectID.substring(0, 8), 16) * 1000);
  return date.toDateString();
}

module.exports = TransactionTableView;
