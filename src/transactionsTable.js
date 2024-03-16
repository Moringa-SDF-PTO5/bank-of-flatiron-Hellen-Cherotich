import React,{useState} from React;
import React from newTransaction;

const transactionsTable =({transactions}) => {
return(
    <table>
        <thead>
         <tr>
        <th>Date</th>
        <th>Description</th> 
        <th>Category</th>
        <th>Amount</th>
        </tr>
        </thead>
        <tbody>
{transactions.map(transaction=>
   <tr key={transaction.id}>
    <td>{transaction.date}</td>
    <td>{transaction.description}</td>
    <td>{transaction.amount}</td>
   </tr> 
    )}
    </tbody>
    </table>
);
};

    

export default transactionsTable;