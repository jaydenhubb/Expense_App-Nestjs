# Expense_Api
This is a Nestjs based RESTful API. Users can add any expense and income reports and then later on compare income and expenses and return the financial summary. 

## Requirements
* Nodejs (Nestjs)
  
## Installation

1. Clone the repository.
2. Install dependencies using npm or yarn.
   - npm install
   - yarn add 
3. Start the Server
   **npm run start:dev**

## Endpoints
   * Get Income reports: 
     GET http://localhost:3000/reports/income
     
     Response Body:
     ```json
     [
    	{
    		"id": "a2115596-8b10-4de3-b236-480abdbdaaff",
    		"source": "Salary",
    		"amount": 7900,
    		"type": "income",
    		"createdAt": "2023-08-18T08:49:01.666Z"
    	},
    	{
    		"id": "a5f905c4-8d0c-45c6-8bed-13fab873dd88",
    		"source": "Lottery",
    		"amount": 900,
    		"type": "income",
    		"createdAt": "2023-08-18T08:49:01.666Z"
    	}
     ]
     ```
   * Get Expense reports: 
     GET http://localhost:3000/reports/expense
     
     Response Body:
     ```json
     [
    	{
    		"id": "147027aa-1259-4ddb-b939-5366adb2362e",
    		"source": "Novels",
    		"amount": 1100,
    		"type": "expense",
    		"createdAt": "2023-08-18T08:49:01.666Z"
    	},
    	{
    		"id": "e16477b8-f4ce-4090-8421-d9579e74cc1b",
    		"source": "Food",
    		"amount": 300,
    		"type": "expense",
    		"createdAt": "2023-08-18T08:49:01.666Z"
    	}
     ]
     ```
   * Get Single Income Report: 
     GET http://localhost:3000/reports/income/a2115596-8b10-4de3-b236-480abdbdaaff

     Response Body:
     ```json
    	{
    	"id": "a2115596-8b10-4de3-b236-480abdbdaaff",
    	"source": "Salary",
    	"amount": 7900,
    	"type": "income",
    	"createdAt": "2023-08-18T08:49:01.666Z"
      }
     ```
   * Get Single Expense Report: 
     GET http://localhost:3000/reports/income/147027aa-1259-4ddb-b939-5366adb2362e

     Response Body:
     ```json
    	{
  		"id": "147027aa-1259-4ddb-b939-5366adb2362e",
  		"source": "Novels",
  		"amount": 1100,
  		"type": "expense",
  		"createdAt": "2023-08-18T08:49:01.666Z"
	    },
     ```
  * Add either Income or Expense Report:
    POST http://localhost:3000/reports/income (for income) OR http://localhost:3000/reports/expense (for expense). Pay attention to the "type" property in the response body. It is either income or expense depending on the url.

    Request Body:
     ```json
    	{
  		"source": "Marketing",
  		"amount": 2000,
       }
     ```
     Response Body:
     ```json
    	{
  		"id": "186eca09-03a3-4851-ad6b-5aedd529cc05",
  		"source": "Marketing",
  		"amount": 2000,
  		"type": "expense/income",
  		"createdAt": "2023-08-18T08:49:01.666Z"
	    },
     ```
   * Update Income or Expense Report:
     PUT http://localhost:3000/reports/income/186eca09-03a3-4851-ad6b-5aedd529cc05  (for income) OR http://localhost:3000/reports/expense/186eca09-03a3-4851-ad6b-5aedd529cc05 (for expense). Pay attention to the "type" property in the response body. It is either income or expense depending on the url.

      Request Body:
     ```json
    	{
  		"amount": 7000,
      }
     ```
      Response Body:
     ```json
    	{
  		"id": "186eca09-03a3-4851-ad6b-5aedd529cc05",
  		"source": "Marketing",
  		"amount": 7000,
  		"type": "expense/income",
  		"createdAt": "2023-08-18T08:49:01.666Z"
	    },
     ```
  * Delete Income or Expense Report:
  DELETE http://localhost:3000/reports/income/186eca09-03a3-4851-ad6b-5aedd529cc05  (for income) OR http://localhost:3000/reports/expense/186eca09-03a3-4851-ad6b-5aedd529cc05 (for expense). Pay attention to the "type" property in the response body. It is either income or expense depending on the url.

  * Report Summary:
    GET http://localhost:3000/summary
    Response Body:
     ```json
    	{
  		"totalIncome": 15800,
	    "totalExpenses": 1400,
	     "netIncome": 14400
	    },
     ```

## Note
No database persistence as this project does not utilize any database.

