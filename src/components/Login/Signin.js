import React, { Component } from 'react'

export default class Signin extends Component {
  render() {
    return (
        <form className="login-form">
        <h1>Log In</h1>
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

        <button
        type="submit"
        className="login-button"
        >
        Log in

        </button>


      </form>
    )
  }
}
