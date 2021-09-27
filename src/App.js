import Navigation from "./components/Navigation/Navigation";
import { Provider} from 'react-redux'
import store from "./my-redux/store";
import CartContainer  from "./components/CartContainer/CartContainer";

import Products from "./components/Products/Products";
import { Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Login from "./components/Login/Login";



export class App extends Component {
  
  
  
  render() {
    return (
      <Provider store={store}>
      <div >
        <Router>
          <Navigation cart={this.cart} dataSearch={this.dataSearch} />
          <Route
            path="/"
            exact
            render={() => <Products  />}
          />

          <Route
            path="/cart"
            render={() => <CartContainer parentState={this.state} />}
          />
          <Route
          path="/CreateAccount"
          render={() => <CreateAccount  />}

          />
          <Route
          path="/login"
          render={() => <Login  />}

          />
           

          
       
      
        </Router>
        
      </div>
      </Provider>
    );
  }
}

export default App;
