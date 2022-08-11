import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, updatePriceRange } from "../../my-redux/actions";
import Categories from "../Categories/Categories";

import { addToWishList } from "../../my-redux/actions";
import { updateMaxPrice } from "../../my-redux/actions";
import { updateMinPrice } from "../../my-redux/actions";

export class Products extends Component {
  render() {
    
    let maxValue = this.props.maxValue
    let minValue = this.props.minValue
    let areSearchResultsEmpty 

    let displayedItems = [];
    if(this.props.searchResults == []){
      areSearchResultsEmpty = this.props.products
    }
    if(this.props.searchResults !== []){
      areSearchResultsEmpty = this.props.searchResults
    }
      displayedItems = areSearchResultsEmpty.map((item) => (
        <div key={item.id} className="product-card">
          {item.title}
          <img src={item.image} alt={`Preview of ${item.title}`} />
          <p className="description">{item.description}</p>
          <p className="price">{item.price} ₴</p>
          <button
            onClick={() => this.props.addToWishList(item)}
            className={
              this.props.wishList.some((e) => e.id === item.id)
                ? "wishlist-button-selected"
                : "wishlist-button-unselected"
            }
          ></button>
          <button
            onClick={() => this.props.addToCart(item)}
            className={
              this.props.userCart.some((e) => e.id === item.id)
                ? "cart-button-selected"
                : "cart-button-unselected"
            }
          ></button>
        </div>
      ));
          

    return (
      <main>
        <Categories></Categories>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="40000"
            defaultValue={40000}
            id="max-price"
            onChange={(event) => this.props.updateMaxPrice(event.target.value)}
          />
          <h1 id="rangevalue"  >{maxValue}</h1>

        <div className="min-slider">
          <input
          type="range"
          min="0"
          max="40000"
          id="min-price"
          onChange={(event) => this.props.updateMinPrice(event.target.value)}


          />
          <h1 id="minValue">{minValue}</h1>

        </div>
        </div>

        {displayedItems}
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wishList:  state.users[state.currentUser].wishlist,    
    products: state.products,
    searchResults: state.searchResult,
    maxValue: state.maxValue,
    minValue: state.minValue,
    userCart: state.users[state.currentUser].cart

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    addToWishList: (item) => dispatch(addToWishList(item)),
    updateMaxPrice: (value) => dispatch(updateMaxPrice(value)),
    updateMinPrice: (value) => dispatch(updateMinPrice(value)),
    updatePriceRange: (min, max) => dispatch(updatePriceRange(min,max))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
