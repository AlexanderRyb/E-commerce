import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromWishlist } from "../../my-redux/actions";
import { addToCart } from "../../my-redux/actions";

import "./styles.css";

class Wishlist extends Component {
  render() {
    let listOfWishedItems = [];
    listOfWishedItems = this.props.wishList.map((item) => (
      <div key={item.id} className="wishlist-product-card">
        {item.title}
        <img src={item.image} alt={`Preview of ${item.title}`} />
        <p className="description">{item.description}</p>
        <p className="price">{item.price} ₴</p>
        <button
          onClick={() => this.props.addToCart(item)}
          className={
            this.props.cart.some((e) => e.id === item.id)
              ? "cart-button-selected"
              : "cart-button-unselected"
          }
        ></button>
        <button
          className="remove-item"
          onClick={() => this.props.removeFromWishlist(item)}
        ></button>
      </div>
    ));
    console.log(listOfWishedItems)

    if(listOfWishedItems = []){
      listOfWishedItems = <div>Nothing in your Wishlist. </div>
    }  
    return (
      <div className="wishlist-container">{listOfWishedItems}</div>
      );
  }
  

  }

const mapStateToProps = (state) => {
  return {
    cart: state.users[state.currentUser].cart,
    wishList: state.users[state.currentUser].wishlist,
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromWishlist: (item) => dispatch(removeFromWishlist(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
