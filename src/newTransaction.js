import e from "cors";
import { useState } from "react";

const newTransactionForm =({onsubmit})=>{
    const [formData,setFormData] =useState({
        date:'',
        description:'',
        category:'',
        amount:'',

    });
    const handleChange = e =>{
        const { name,value } =e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value,
        }))
    };
 const handlesubmit = e => {
    e.preventDefault();
    onsubmit(formData);
    setFormData({
        date:'',
        description:'',
        category:'',
        amount:'',  
    })
 };
 return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        />
        <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <button type="submit">newTransaction</button>
    </form>
  );
};
 

export default newTransactionForm;