import React from 'react'
import "./styles.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { submitRegistration } from '../../my-redux/actions';


const CreateAccount = (props) => {
    return (
        <div className="sign-in-block">
         <h2>Register</h2>

            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="userName">
                </input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password">
                </input>
<button type="submit" id="register-button"  >Register</button>
            </form>
            
<Link to="/login" className="login-link">Log In </Link>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
    }
  }
  const mapDispatchToProps  = dispatch => {
    return {
        submitRegistration: (userData) => dispatch(submitRegistration(userData))  
    }
  }

export default connect (mapStateToProps,
    mapDispatchToProps
    ) (CreateAccount)
  