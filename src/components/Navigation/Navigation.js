import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../my-redux/actions";
export class Navigation extends Component {
  render() {
    return (
      <header>
     
        <div className="navPanel">
                <input className="searchbar"
                      onChange={(e) => this.props.search(e.target.value)
                       
                             }
                 ></input>
            <Link className="shop-link" to="/">
            
            <div >
              Shop
              </div>


            </Link>
         
           
          <Link  className="cart-link" to="/Cart">
          <div>
            Cart 
                       
          </div>
          <div className="cart-count">
            {this.props.itemsInCart}
            </div>

          </Link>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
itemsInCart: state.cart.length
  }
}
const mapDispatchToProps  = dispatch => {
  return {
    search: (query) => dispatch(search(query)),
 

  }
}


export default connect (mapStateToProps,
  mapDispatchToProps
  ) (Navigation)
