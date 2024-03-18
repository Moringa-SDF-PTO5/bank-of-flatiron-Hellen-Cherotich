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
    fetch(`https://bank-of-flatiron-hellen-cherotich.onrender.com/transactions`, {
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

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} />
      <NewTransactionForm onSubmit={handleNewTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
