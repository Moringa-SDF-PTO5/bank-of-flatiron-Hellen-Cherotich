// NewTransactionForm.js
import React, { useState } from "react";

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
      {/* Input fields here */}
    </form>
  );
};

export default NewTransactionForm;
