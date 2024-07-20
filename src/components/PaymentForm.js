import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ selectedCourse, onComplete }) => {
  const [selection, setSelection] = useState('1 adult');
  const [price, setPrice] = useState(75);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const handleSelectionChange = (event) => {
    const value = event.target.value;
    setSelection(value);
    switch(value) {
      case '1 adult':
        setPrice(75);
        break;
      case '1 adult and 1 youth':
        setPrice(120);
        break;
      case '1 adult and 2 youths':
        setPrice(150);
        break;
      case '1 adult and 3 youths':
        setPrice(180);
        break;
      default:
        setPrice(75);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You're registered for the course!`);
    onComplete();
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form for {selectedCourse}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Who is the course for?</label>
          <select value={selection} onChange={handleSelectionChange}>
            <option value="1 adult">1 adult - $75</option>
            <option value="1 adult and 1 youth">1 adult and 1 youth - $120</option>
            <option value="1 adult and 2 youths">1 adult and 2 youths - $150</option>
            <option value="1 adult and 3 youths">1 adult and 3 youths - $180</option>
          </select>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Credit Card Number</label>
          <input 
            type="text" 
            value={creditCard} 
            onChange={(e) => setCreditCard(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Buy Course for ${price}</button>
      </form>
    </div>
  );
};

export default PaymentForm;