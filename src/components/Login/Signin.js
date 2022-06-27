import React, { Component } from 'react'
import { connect } from "react-redux";



export class Signin extends Component {
  _onSubmit(e){
    e.preventDefault();

    this.props.login(e.target.email.value)
  }
  render() {
  
    
    return (
        
        <form className="login-form" onSubmit={this._onSubmit} >
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
          
        ></input>

        <button
        type='submit'
       
        className="login-button"
        >
        Log in

        </button>


      </form>
    )
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
    login: (email) => dispatch(email)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);


