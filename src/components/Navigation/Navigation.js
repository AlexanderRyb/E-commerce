import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="navPanel">
          <input onChange={this.props.dataSearch}></input>

          <div className="shop-link">
            <Link to="/">Shop</Link>
          </div>

          <Link to="/Cart">
            <div className="cart-button"></div>
            <p className="cart-text">ваш кошик</p>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navigation;
