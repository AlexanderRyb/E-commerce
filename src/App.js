import Navigation from "./components/Navigation/Navigation";
import { Provider} from 'react-redux'
import store from "./my-redux/store";
import CartContainer  from "./components/CartContainer/CartContainer";

import Products from "./components/Products/Products";
import { Route, BrowserRouter as Router } from "react-router-dom";
import productList from "./components/Products/productList.json";
import React, { Component } from "react";




export class App extends Component {
  constructor() {
    super();
    this.state = {
     
      search: productList,
    };
  }
  dataSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = productList.filter((item) => {
      return item.description.toLowerCase().includes(value);
    });
    this.setState({ search: filter });
    console.log(this.state.search);
  };

  
  
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
       
      
        </Router>
        
      </div>
      </Provider>
    );
  }
}

export default App;
