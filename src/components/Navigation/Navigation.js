import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../my-redux/actions";
export class Navigation extends Component {
  render() {
    let numberOfItems = this.props.itemsInCart
    //if there are no items in the cart, 0 is not displayed
    if(numberOfItems===0){
      numberOfItems = ""
    }
    return (
      <header>
     
        <div className="navPanel">
                <input className="searchbar"
                      onChange={(e) => this.props.search(e.target.value)
                       
                             }
                 ></input>
                 <div className="links">
                   
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
            {numberOfItems}
            </div>

          </Link>
          <Link className="sign-up-link">
          <div>Sign Up</div>

          </Link>
          <Link className="log-in-link">
          <div>
            Log In
          </div>
          </Link>
                 </div>
            

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
