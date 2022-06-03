import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";


export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Register</h1>
          <hr />
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          ></input>
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />

          <button type="submit" class="registerbtn">
            Register
          </button>

          <div class="container signin">
            <p>
              Already have an account? <a href="#">Sign in</a>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}
