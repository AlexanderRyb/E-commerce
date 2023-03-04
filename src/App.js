import Navigation from "./components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./my-redux/store";
import CartContainer from "./components/CartContainer/CartContainer";

import Products from "./components/Products/Products";
import { Route, Routes,  HashRouter } from "react-router-dom";
import React, { Component } from "react";
import Wishlist from "./components/Wishlist/Wishlist";
import Signin from "./components/Login/Signin";

export class App extends Component {
  componentDidMount() {
    document.title = "Commerce";
}
  render() {
    return (
      <Provider store={store}>
        <div>
          <HashRouter hashType="noslash" >
            <Navigation cart={this.cart} dataSearch={this.dataSearch} />
            <Routes>
            <Route path="/" element={<Products />} />


            <Route
              path="/cart"
              element={<CartContainer parentState={this.state} /> }
              // render={() => <CartContainer parentState={this.state} />}
            />

            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/signin"element={<Signin />} />
            <Route path="/userPage" element={<userPage />} />
            </Routes>
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
