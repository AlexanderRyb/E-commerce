import "./styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { submitRegistration } from "../../my-redux/actions";

import React, { Component } from 'react'
import {useState, useEffect} from 'react'


function CreateAccount(props) {
  
  const [userName, setuserName] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      input1: userName,
      input2: input2Value,
    };
    dispatch(submitForm(formData));
  };
 
    return (
      <div className="sign-in-block">
      <h2>Register</h2>

      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="username"
          id="userName"
          value={userName} onChange={(e) => setuserName(e.target.value)}
          
        ></input>
        <label htmlFor="password">Password</label>
        <input type="password"
         name="password"
         value={input2Value} onChange={(e) => setInput2Value(e.target.value)} 
          
        
        ></input>
        <button type="button" id="register-button"
        onClick={()=>props.submitRegistration(this.state.username, this.state.password)
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
