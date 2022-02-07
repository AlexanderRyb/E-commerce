import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../my-redux/actions";
import Categories from "../Categories/Categories";

import { addToWishList } from "../../my-redux/actions";

export class Products extends Component {
 
  render() {
     
  

     // console.log(this.props.cart)


  
    let searchResuts = [];
    if (this.props.filteredItems !== []) {
      searchResuts = this.props.filteredItems.map((item) => (        
        <div key={item.id} className="product-card">
          {item.title}
          <img src={item.image} alt={`Preview of ${item.title}`} />
          <p className="description">{item.description}</p>
          <p className="price">{item.price} ₴</p>
          <button
            onClick={() => this.props.addToWishList(item)}
            className="wishlist-button"
          >
            wishlist
          </button>
          <button    

            onClick={() => this.props.addToCart(item)}
            className={this.props.cart.some(e=> e.id === item.id)? 'cart-button-selected': 'cart-button-unselected'}
            //if item.id is in cart 1 class, if it's not 0
          ></button>
        </div>
      ));
    }

    return <main>
      <Categories></Categories>
      {searchResuts}</main>;
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    items: state.items,
    filteredItems: state.filteredItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    addToWishList: (item) => dispatch(addToWishList(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
