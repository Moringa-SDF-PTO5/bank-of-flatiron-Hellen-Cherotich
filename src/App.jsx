import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionsTable";
import NewTransactionForm from "./NewTransaction";
import SearchBar from "./SearchBar";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const handleNewTransaction = (formData) => {
    fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add transaction");
        }
        return response.json();
      })
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
        onSearch={(searchTerm) => {
          const filtered = transactions.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredTransactions(filtered);
        }}
      />
      <NewTransactionForm onSubmit={handleNewTransaction} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
