import { Link } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import { search } from "../../my-redux/actions";
import { ReactComponent as Wishlist } from "./heart.svg";
import { ReactComponent as Cart } from "./cart.svg";
import { ReactComponent as Grid } from "./grid.svg";
import { ReactComponent as User } from "./user.svg";
import { showEveryCategory } from "../../my-redux/actions";

import {useState, useEffect} from 'react'
 
function Navigation(props){
  
  let numberOfCartItems = props.itemsInCart;
  let numberOfWishlistItems = props.itemsInWishlist;
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
            onChange={(e) => props.search(e.target.value)}
          ></input>
          <div className="searchbar-button"></div>
        </div>

        <div className="links">
          <div className="registration-page-link">
            <Link to="/signin">
              <User fill="white" width={30} className="nav-icon" title="sign in"></User>
            </Link>
          </div>

          <div className="shop-link">
            <Link to="/">
              <Grid
                fill="white"
                width={30}
                className="nav-icon"
                onClick={() => props.showEveryCategory()}
                id="shop-icon"
                to="/"
                title="shop"
              ></Grid>
            </Link>
          </div>
          <div className="cart-link">
            <Link to="/Cart">
              <Cart fill="white" width={30}  title="cart" className="nav-icon" />
              <div id="cart-count" className={cartEmpty ? "hidden" : null}>
                {numberOfCartItems}
              </div>
            </Link>
          </div>

          <div className="wishlist-link">
            <Link to="/wishlist">
              <Wishlist
                className="nav-icon"
                fill="white"
                width={25}
                title="wishlist"

              ></Wishlist>
              <div
                id="wishlist-count"
                className={wishlistEmpty ? "hidden" : null}
              >
                {numberOfWishlistItems}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

  




const mapStateToProps = (state) => {
  return {
    itemsInCart: state.users[state.currentUser].cart.length,
    itemsInWishlist: state.users[state.currentUser].wishlist.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => dispatch(search(query)),
    showEveryCategory: () => dispatch(showEveryCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
