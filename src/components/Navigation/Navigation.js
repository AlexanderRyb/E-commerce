import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
export class Navigation extends Component {
  render() {
    return (
      <header>
     
        <div className="navPanel">
                <input className="searchbar" ></input>
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
const mapStateToProps = state => {
  return {
      text: state.text
  }
}
const mapDispatchToProps  = dispatch => {
  return {
 

  }
}


export default connect (mapStateToProps,
  mapDispatchToProps
  ) (Navigation)
