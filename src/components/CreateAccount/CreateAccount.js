import "./styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { submitRegistration } from "../../my-redux/actions";

import React, { Component } from 'react'

class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }
  onUsernameChange(e){
    this.setState({[e.target.name]: e.target.value});   
  }
  onPasswordChange(e){
    this.setState({[e.target.name]: e.target.value});   
  }
 
  render() {
    return (
      <div className="sign-in-block">
      <h2>Register</h2>

      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="username"
          id="userName"
          value={this.state.username}
          onChange={this.onUsernameChange}
          
        ></input>
        <label htmlFor="password">Password</label>
        <input type="password"
         name="password"
         value={this.state.password}
         onChange={this.onPasswordChange}
          
        
        ></input>
        <button type="button" id="register-button"
        onClick={()=>this.props.submitRegistration(this.state.username, this.state.password)
        }
        >
          Register
        </button>
      </form>

      <Link to="/login" className="login-link">
        Log In{" "}
      </Link>
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitRegistration: (userName, userPassword) => dispatch(submitRegistration(userName, userPassword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
