import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";


export default class Login extends Component {
  render() {
    return (
      <div>
        <form className="registration-form">
          <h1>Register</h1>
          <hr />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          ></input>
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />

          <button type="submit" className="registerbtn">
            Register
          </button>

          <div className="container signin">
            <p>
              Already have an account?
              <Link to="/signin">
              <a to="/#">Sign in</a>.
                </Link> 
            </p>
          </div>
        </form>
        
      
      </div>
    );
  }
}
