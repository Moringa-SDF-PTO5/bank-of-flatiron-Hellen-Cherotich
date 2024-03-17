import React, { useState,useEffect } from "react";
import transactionsTable from "./transactionsTable";
import newTransactionForm from "./newTransaction";
import SearchBar from "./SearchBar";

const App = () => {
    const [transactions,setTransactions] = useState([]);
const [filteredTransactions, setFilteredTransactions] = useState ([]);

useEffect (() => {
    fetch('http://localhost:3000/transactions/')
    .then(Response => Response.json())
    .then(data=>{
        setTransactions(data);
        setFilteredTransactions(data);
    })
    .catch(error =>console.error('Error fetching transactions:',error));
},[]);

const handleNewTransaction = formData => {
    fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newTransaction => {
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
    })
    .catch(error => console.error('Error adding transaction:', error));
};

const handleSearch = searchTerm => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <AddTransactionForm onSubmit={handleAddTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};
export default App;