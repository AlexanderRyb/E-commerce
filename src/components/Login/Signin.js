import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../my-redux/actions";
import { logout } from "../../my-redux/actions";
import { openSignUpPage } from "../../my-redux/actions";
import { openSignInPage } from "../../my-redux/actions";
import { register } from "../../my-redux/actions";
import "./styles.css";



export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordAgain: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordAgainChange = this.handlePasswordAgainChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
  }
  handleEmailChange(event) {
    this.setState({ ...this.state, email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ ...this.state, password: event.target.value });
  }
  handlePasswordAgainChange(event) {
    this.setState({ ...this.state, passwordAgain: event.target.value });
  }
  handleSubmit(event) {
    console.log("your email is " + this.state.email);
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }
  handleRegisterSubmit(event) {
    event.preventDefault();
    this.props.register(this.state.email, this.state.password, this.state.passwordAgain);
  }

  render() {

  //

  let userHistory = this.props.userHistory.map((item) => (
    
    <tr key={item.id} className="history-product-card">
            <td className="item-description">{item.description}</td>
            <td className="item-price">{item.price}</td>

          {/* <img className="history-item-image" src={item.image} alt={`Preview of ${item.title}`} /> */}
          <td className="item-time"> {item.timeStamp}</td>
          <td className="item-quantity">{item.quantity}</td>
      
    </tr>
  ));
  //

    return (
      <div>
        {/* log in page */}
        <form
          className={
            "login-form " + (this.props.logInPage ? "visible" : "invisible")
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
          <p>Don't have an account yet? </p>
            <a onClick={this.props.openSignUpPage}>Sign up</a>
                
        </form>
        {/* sign up page */}
        <form 
        className={
          "registration-form " + (this.props.signUpPage ? "visible" : "invisible")
        }
        
        onSubmit={this.handleRegisterSubmit}>
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

         
          <p>already have an account? </p>
            <a onClick={this.props.openSignInPage}  >log in</a>
        </form>


        {/* user page */}
        <div
          className={
            "user-data " + (this.props.currentUser !=0 ? "visible" : "invisible")
          }
        >
                    <p className="user-information">Current user: {this.props.userData}</p>

          <h3> Your history:</h3>
          <table className="user-history-block">
          <tr className="columns">
          <th>Name</th> 
          <th>Cost</th> 
          <th>Date of purchase</th> 
          <th>quantity</th> 
          </tr>  

          {/* <div className="columns">
            <div className="columns-name">Name</div>
            <div className="columns-cost">Cost</div>
            <div>date of purchase</div>
            <div>quantity</div>
          </div> */}
          
            {userHistory}
          
          </table>
          <button className="sign-out-button" onClick={() => this.props.logout()}>Sign out</button>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    userData: state.users[state.currentUser].email,
    userHistory: state.users[state.currentUser].history,
    logInPage: state.logInPage,
    signUpPage: state.signUpPage,
    userDataPage: state.userDataPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout()),
    register: (email, password, passwordAgain) => dispatch(register(email, password, passwordAgain)),
    openSignUpPage: () => dispatch(openSignUpPage()),
    openSignInPage: () => dispatch(openSignInPage())


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
