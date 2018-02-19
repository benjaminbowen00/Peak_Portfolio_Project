Peak Portfolio
=======

This is an app to help the user manage their stock portfolio. This was completed as a group project on CodeClan's 16 week course. It is a full stack app built using JavaScript (without any additional framework). We used an external API to get up to data share prices, stored all transactions, the list of all companies and the daily portfolio value in mongo, a NoSQL database. Separate front-end and back-end servers were used. In the front end, models and views were separated.

## Brief

## Shares App

A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a minimal viable product (MVP) that uses the data to display her portfolio in useful ways so that she can make better decisions.

## MVP

 - View total current value
 - View individual and total performance trends
 - Retrieve a list of share prices from an external API and allow the user to add shares to her portfolio
 - Provide a chart of the current values in her portfolio


### Example API
https://www.alphavantage.co/ (Requires sign up)

## Setup Instructions

1. Download the files from the repository.
2. Run 'npm install' in terminal to install the dependencies.
3. Seed the database with the company information from the back_end seeds folder in terminal: 'node convert.js'.
4. If you wish to seed the databases with transactions and valuations run both transaction_seeds.js and valuation_seeds.js.
5. Run mongo in terminal: 'mongod'.
6. Run the back end server: 'npm start'.
7. Run webpack: 'npm run build'.
8. Run the front end server: 'npm start'.
9. Go to localhost:3000 to use the app.


## Using the App
The app allows the user to record any transactions of shares they have made. When the page loads the API request to https://www.alphavantage.co/ is made to get the current share prices. The modal-box allows you to find any of the companies listed on the NASDAQ or NYSE. The total, up to date, portfolio value, the weightings of the portfolio with different shares is shown in a pie chart and the also in a table. The pie chart and table aggregate all the transactions for a particular share. If you sell shares you can remove them in a similar way to adding them.
At the bottom of the from page the historical portfolio value is displayed as a line chart. If the back end server is running the value is recorded at 10pm on Monday to Friday through a scheduled task.

Clicking on the name of a company in the table takes the user to a new page showing the change in price of that particular share, the five latest news stories related to that share and the list of any transactions (purchases or sales) of shares for that company.
