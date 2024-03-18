import React, { useState } from "react";
import "./NewTransactionForm.css";
const NewTransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default NewTransactionForm;
