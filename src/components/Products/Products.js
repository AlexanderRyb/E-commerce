import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../my-redux/actions";
import { addToWishList } from "../../my-redux/actions";

export class Products extends Component {
  render() {
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
            className="cart-button"
          ></button>
        </div>
      ));
    }

    return <main>{searchResuts}</main>;
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
