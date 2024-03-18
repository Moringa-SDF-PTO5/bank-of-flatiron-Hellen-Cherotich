// App.js
import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import NewTransactionForm from "./NewTransactionForm";
import SearchBar from "./SearchBar";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("https://bank-of-flatiron-hellen-cherotich.onrender.com/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) =>
        console.error("Error fetching transactions:", error)
      );
  }, []);

  const handleNewTransaction = (formData) => {
    fetch(`https://bank-of-flatiron-hellen-cherotich.onrender.com/transactions/${transactions}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar
        transactions={transactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <NewTransactionForm handleNewTransaction={handleNewTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
