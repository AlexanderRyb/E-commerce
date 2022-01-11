import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../my-redux/actions";
import {ReactComponent as Wishlist} from './heart.svg'
import {ReactComponent as Cart} from './cart.svg'

export class Navigation extends Component {
  
  render() {
    let numberOfCartItems = this.props.itemsInCart;
    let numberOfWishlistItems = this.props.itemsInWishlist;
    let cartEmpty = false;
    let wishlistEmpty = false;

    //if there are no items in the cart, 0 is not displayed
    if (numberOfCartItems === 0) {
      
      cartEmpty = true;
    }
    if (numberOfWishlistItems === 0) {
      wishlistEmpty = true;

    }
    return (
      <header>
        <div className="navPanel">
          <div className="search-block">
            <input
              className="searchbar"
              placeholder="search..."
              onChange={(e) => this.props.search(e.target.value)}
            ></input>
          </div>

          <div className="links">
            <Link className="shop-link" to="/">
              <div>Shop</div>
            </Link>

            <Link className="cart-link" to="/Cart">
              <Cart fill="white" width={25} className="nav-icon" />
              <div id="cart-count" className={cartEmpty? "hidden": null} >{numberOfCartItems}</div>
            </Link>
            <Link className="wishlist-link" to="/wishlist">
             <Wishlist 
             className="nav-icon"
             fill="white"


             width={25}
             >

               
               </Wishlist>
              <div id="wishlist-count" className={wishlistEmpty? "hidden" : null} >{numberOfWishlistItems}</div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemsInCart: state.cart.length,
    itemsInWishlist: state.wishList.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(search(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
