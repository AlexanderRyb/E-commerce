import React from 'react';

export default function Form() {
  return   <form id="cart-form">
  <label htmlFor="customer-name">Name</label>
  <input id="customer-name" className="form-input"></input>
  <br/>
  <label htmlFor="customer-surname">Second name</label>
  <input htmlFor="customer-surname" className="form-input"></input>
  <br/>
  
  
  <label htmlFor="customer-phone">phone</label>
  <input id="customer-phone" className="form-input"></input>
  <br/>
  
  
  <label htmlFor="customer-address">address</label>
  <input id="customer-address" className="form-input"></input>
  
  
        </form>
}
