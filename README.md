# Bank of Flatiron

Bank of Flatiron is a simple web application for managing transactions.

## Features

- View a list of transactions
- Add new transactions
- Search transactions by description

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hcherotich/bank-of-flatiron.git
2. Install dependencies:

bash
Copy code
cd bank-of-flatiron
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
View a list of transactions on the main page.
Use the search bar to filter transactions by description.
Add new transactions using the form at the top of the page.
Components
App.js
This component serves as the main entry point for the application. It fetches transaction data from an API, renders the search bar, new transaction form, and the transactions table.

NewTransactionForm.js
This component provides a form for adding new transactions. Users can input the date, description, category, and amount for the transaction.

SearchBar.js
This component implements a simple search bar for filtering transactions by description.

TransactionsTable.js
This component displays a table of transactions, including their date, description, category, and amount.

Technologies Used
React
HTML
CSS
JSON Server (for simulating backend data)
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.