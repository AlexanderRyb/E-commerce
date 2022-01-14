import Navigation from "./components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./my-redux/store";
import CartContainer from "./components/CartContainer/CartContainer";

import Products from "./components/Products/Products";
import { Route,  HashRouter } from "react-router-dom";
import React, { Component } from "react";
import Wishlist from "./components/Wishlist/Wishlist";
import Categories from "./components/Categories/Categories";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HashRouter hashType="hashbang" >
            <Navigation cart={this.cart} dataSearch={this.dataSearch} />
            <Categories></Categories>
            <Route path="/" exact render={() => <Products />} />


            <Route
              path="/cart"
              render={() => <CartContainer parentState={this.state} />}
            />

            <Route path="/wishlist" render={() => <Wishlist />} />
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
