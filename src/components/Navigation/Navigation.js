import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";


export class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="navPanel">
          <input className="searchbar" onChange={this.props.dataSearch}></input>

            <Link className="shop-link" to="/">
            
            <div >
              Shop
              </div>


            </Link>
         
         
           
          <Link  className="cart-link" to="/Cart">
          <div>
            Cart
          </div>

          </Link>
        </div>
      </header>
    );
  }
}

export default Navigation;
