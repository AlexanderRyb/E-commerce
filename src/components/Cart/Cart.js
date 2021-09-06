import React, { Component } from "react";
import "./styles.css";
export class cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  //
  componentDidMount() {
    var retrievedData = localStorage.getItem("data");
    retrievedData = JSON.parse(retrievedData);

    if (retrievedData) {
      this.setState({ cart: retrievedData });
    }
  }

  removeItem(item) {
    let filteredCart = this.state.cart.filter((x) => {
      return x.id !== item.id;
    });
    console.log(filteredCart);

    this.setState({ cart: filteredCart });
    console.log(filteredCart);

    var stored = JSON.stringify(filteredCart);

    localStorage.setItem("data", stored);
    console.log(this.state.cart);
  }

  submit() {
    console.log(this.state.cart);
  }

  render() {
    var cartRow = "";
    if (this.state.cart != null) {
      cartRow = this.state.cart.map((item) => (
        <div className="cart-item-row" key={item.id}>
          <button
            className="remove-item"
            onClick={() => this.removeItem(item)}
          ></button>
          <img className="mini-image" src={item.image} alt=""></img>
          <p className="cart-description">{item.description}</p>
          <div>+ {item.quantity} -</div>
          <div className="item-cart-price">{item.price + "₴"}</div>
        </div>
      ));
    }
    var cartCount = "";
    if (this.state.cart) {
      cartCount = this.state.cart.length;
    }

    return (
      <main>
          <div className="temp-cart">{cartRow}</div>
        <button
          type="submit"
          className="submit-form-button"
          onClick={this.submit}
        >
          Submit
        </button>
      </main>
    );
  }
}

export default cart;
