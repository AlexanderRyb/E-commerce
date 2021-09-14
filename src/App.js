import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
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
      <div >
        <Router>
          <Navigation cart={this.cart} dataSearch={this.dataSearch} />
          <Route
            path="/"
            exact
            render={() => <Products parentState={this.state} />}
          />

          <Route
            path="/cart"
            render={() => <Cart parentState={this.state} />}
          />
       
      
        </Router>
        
      </div>
    );
  }
}

export default App;
