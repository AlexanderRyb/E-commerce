import React from "react";


export default function Form() {
  return (
    <form id="cart-form">
      <h1>Checkout order</h1>
      <div className="input-container">
        <label htmlFor="customer-name">Name</label>
        <input id="customer-name" className="form-input"></input>
      </div>
      <div className="input-container">
        <label htmlFor="customer-phone">Phone</label>
        <input id="customer-phone" className="form-input" required></input>
      </div>
<div className="input-container">
<label htmlFor="customer-email">E-mail</label>
<input id="customer-email" className="form-input"></input>
</div>

      <div className="input-container">
        <label htmlFor="customer-address">Address</label>
        <input id="customer-address" className="form-input"></input>
      </div>
      
    </form>
  );
}


