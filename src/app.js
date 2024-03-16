import React, { useState,useEffect } from "react";
import transactionsTable from "./transactionsTable";
import newTransactionForm from "./newTransaction";
import SearchBar from "./SearchBar";

const App = () => {
    const [transactions,setTransactions] = useState([]);
const [filteredTransactions, setFilteredTransactions] = useState ([]);

useEffect (() => {
    fetch('http://localhost:3000/transactions')
    .then(Response => Response.json())
    .then(data=>{
        setTransactions(data);
        setFilteredTransactions(data);
    })
    .catch(error =>console.error('Error fetching transactions:',error));
},[]);

const handlenewTransactions = formData =>{
    fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
}
}