# Expense_Api

## Description

This is a simple NestJs API that calculates and returns the user's net-income. It consists of two different endpoints. The first endpoint recieves the income or expense amount and its corresponding source. Users can create, read, update and delete either an income report or and expense report. These reports are stored locally and the data does not persist. The second endpoint returns the total income, the total expense and the net-income(total income - total expense).


## Installation

After Cloning this repository, in the project directory, you can run:

#### `npm install` 
This installs the project dependencies.

#### `npm run start:dev` 
Runs the app in the development mode in `port 3000`.

## Usage

Send a `GET` request to the route [http://localhost:3000/reports/income](http://localhost:3000/reports/income) to get all income reports from the local database or [http://localhost:3000/reports/expense](http://localhost:3000/reports/expnse) to get all expense reports from the local database.

Send a `GET` request to the route [http://localhost:3000/reports/income/:id](http://localhost:3000/reports/income/:id) to get a single income report from the local database or [http://localhost:3000/reports/expense/:id](http://localhost:3000/reports/expense/:id) to get a single expense report from the local database. Where the URLparam `id` will be the id of indivdual expense or income id.

Send a `POST` request either the [http://localhost:3000/reports/income](http://localhost:3000/reports/income)  or [http://localhost:3000/reports/expense/:id](http://localhost:3000/reports/expense/:id) route to create either an income or expense report. The body of the request should contain `source` with a string value and `amount` with a number value. any other type will throw an error.

Send a `PUT` request either the [http://localhost:3000/reports/income/:id](http://localhost:3000/reports/income/:id)  or [http://localhost:3000/reports/expense/:id](http://localhost:3000/reports/expense/:id) route to update either a single report. The body of the request should contain  either a `source` with a string value or `amount` with a number value. Any other type will throw an error.

Send a `DELETE` request either the [http://localhost:3000/reports/income/:id](http://localhost:3000/reports/income/:id)  or [http://localhost:3000/reports/expense/:id](http://localhost:3000/reports/expense/:id) route to delete a single report. 

Send a `GET` request either the [http://localhost:3000/summary](http://localhost:3000/summary) to get the net-income based on the income and the expense reports in the reports route. 

## Endpoints

#### http://localhost:3000/reports/income
#### http://localhost:3000/reports/expense
#### http://localhost:3000/summary

