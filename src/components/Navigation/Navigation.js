import { Link } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../my-redux/actions";
export class Navigation extends Component {
  render() {
    let numberOfCartItems = this.props.itemsInCart;
    let numberOfWishlistItems = this.props.itemsInWishlist;
    //if there are no items in the cart, 0 is not displayed
    if (numberOfCartItems === 0) {
      numberOfCartItems = "";
    }
    if (numberOfWishlistItems === 0) {
      numberOfWishlistItems = "";
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
              <div>Cart</div>
              <div className="cart-count">{numberOfCartItems}</div>
            </Link>
            <Link className="wishlist-link" to="/wishlist">
              <div>Wishlist</div>
              <div className="wishlist-count">{numberOfWishlistItems}</div>
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
