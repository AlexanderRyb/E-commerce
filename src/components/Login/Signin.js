import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../my-redux/actions";
import { logout } from "../../my-redux/actions";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {
    this.setState({ ...this.state, email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ ...this.state, password: event.target.value });
  }
  handleSubmit(event) {
    console.log("your email is " + this.state.email);

    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <form
          className={
            "login-form " + (this.props.loggedIn ? "invisible" : "visible")
          }
          onSubmit={this.handleSubmit}
        >
          <h1>Log In </h1>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div
          className={
            "user-data " + (this.props.loggedIn ? "visible" : "invisible")
          }
        >
          <p>{this.props.userData}</p>
          <button onClick={() => this.props.logout()}>Sign out</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    userData: state.users[state.currentUser].data,
    loggedIn: state.loggedStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
