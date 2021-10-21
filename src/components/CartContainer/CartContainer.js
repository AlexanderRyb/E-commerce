import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { removeFromCart } from "../../my-redux/actions";
import { increment } from "../../my-redux/actions";
import { decrement } from "../../my-redux/actions";
import { submit } from "../../my-redux/actions";

export function CartContainer(props) {
  let cartItem = "";
  if (props.cart) {
    cartItem = props.cart.map((item) => (
      <div className="cart-item-row" key={item.id}>
        <div className="image-block">
          <img className="mini-image" src={item.image} alt=""></img>
        </div>

        <div className="information-block">
          <div className="description-block">
            <p className="cart-description">{item.description}</p>

            <button
              className="remove-item"
              onClick={() => props.removeFromCart(item)}
            ></button>
          </div>

          <div className="price-block">
            <div className="item-price">{item.price + "₴"}</div>
            <div className="quantity-block">
              <button
                className="plus-button"
                onClick={() => props.increment(item)}
              >
                +
              </button>
              <div className="item-quantity">{item.quantity}</div>
              <button
                className="minus-button"
                onClick={() => props.decrement(item)}
              >
                -
              </button>
            </div>
            <div className="item-total-price">
              {item.price * item.quantity + "₴"}
            </div>
          </div>
        </div>
      </div>
    ));
  }
  let cartSum = props.cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
  if (cartSum < 1) {
    cartSum = "The cart is empty";
  } else {
    cartSum = "Total sum:" + cartSum + "₴";
  }

  return (
    <main>
      <form id="cart-form">
<div>data form</div>
      </form>
      <div className="cart-container">

      {cartItem}
      <div className="total-sum-block">{cartSum} </div>
      <button
        type="submit"
        className="submit-form-button"
        onClick={() => props.submit()}
      >
        Submit
      </button>
      </div>

    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    increment: (item) => dispatch(increment(item)),
    decrement: (item) => dispatch(decrement(item)),
    submit: () => dispatch(submit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
