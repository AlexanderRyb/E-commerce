import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../my-redux/actions";
import Categories from "../Categories/Categories";

import { addToWishList } from "../../my-redux/actions";

export class Products extends Component {
 
  render() {
     console.log(this.props.cart)
     console.log(this.props.wishList)
  



  
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

            className={this.props.wishList.some(e=> e.id === item.id)? 'wishlist-button-selected': 'wishlist-button-unselected'}

          >
            
          </button>
          <button    

            onClick={() => this.props.addToCart(item)}

            className={this.props.cart.some(e=> e.id === item.id)? 'cart-button-selected': 'cart-button-unselected'}
          >
          </button>
        </div>
      ));
    }

    return <main>
      <Categories></Categories>
      <div class="slider">
  <input type = "range" min="0" max="100" onchange="rangevalue.value=value"/>
	<output id="rangevalue">50</output>
  </div>
  
      {searchResuts}</main>;
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wishList: state.wishList,
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
