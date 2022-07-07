import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../my-redux/actions";
import { UserPage } from "./UserPage";


export class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordAgain: ''
    }
  
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordAgainChange = this.handlePasswordAgainChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(event){
    this.setState({...this.state, email: event.target.value})
  }
  handlePasswordChange(event){
    this.setState({...this.state, password: event.target.value})
  }
  handlePasswordAgainChange(event){
    this.setState({...this.state, passwordAgain: event.target.value})
  }
  handleSubmit(event){
    
    console.log('hello' + this.state.email, this.state.password)
    event.preventDefault()
    this.props.register(this.state.email, this.state.password, this.state.passwordAgain)
  }
  render() {
    return (
      <div>
        <form className="registration-form" onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <hr />
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
            value={this.state.passwordAgain} 
          onChange={this.handlePasswordAgainChange}
            required
          />

          <button type="submit" className="registerbtn">
            Register
          </button>

          <div className="container signin">
            <p>
              Already have an account?
              <Link to="/signin">
              Sign in
                </Link> 
            </p>
          </div>
        </form>
        <UserPage></UserPage>
        
      
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    emailValue: state.emailValue,
    passValue: state.passValue
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password, passwordAgain) => dispatch(register(email, password, passwordAgain))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);