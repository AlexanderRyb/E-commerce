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
    this.setState({ cart: filteredCart });
    var stored = JSON.stringify(filteredCart);
    localStorage.setItem("data", stored);
  }

  incrementQuantity(item) {
    item.quantity++;
let myItem = this.state.cart.filter(obj => {
  return obj.id === item.id
})

myItem.quantity = item.quantity;
this.setState({ state: this.state });
var stored = JSON.stringify(this.state.cart);
localStorage.setItem("data", stored)
  }
  decrementQuantity(item) {
    
    item.quantity--;
    if(item.quantity < 1){
      this.removeItem(item)
    }
    

  }

  submit() {
  let cartCount = this.state.cart.length

    console.log("You have bought "+cartCount+" items. You need to pay a lot");
    this.setState({cart: []})
    console.log(this.state.cart)
    localStorage.removeItem("data")
  }

  render() {
    var cartRow = "";
    var cartSum = 0;

    
    if (this.state.cart != null) {
      cartSum = this.state.cart.reduce(function (total, item) {
        return total + item.price*item.quantity;
      }, 0);

      cartRow = this.state.cart.map((item) => (
        <div className="cart-item-row" key={item.id}>
          <button
            className="remove-item"
            onClick={() => this.removeItem(item)}
          ></button>
          <img className="mini-image" src={item.image} alt=""></img>
          <p className="cart-description">{item.description}</p>
          <div>
            <button onClick={() => this.incrementQuantity(item)}>+</button>
            {item.quantity}
            <button onClick={() => this.decrementQuantity(item)}>-</button>
          </div>
          <div className="item-cart-price">{item.price*item.quantity + "₴"}</div>
        </div>
      ));
    }
   
  
    return (
      <main>
        <div className="temp-cart">{cartRow}</div>
        <div>Загальна сумма - {cartSum} гривень</div>
        <button
          type="submit"
          className="submit-form-button"
          onClick={this.submit.bind(this)}
        >
          Submit
        </button>
      </main>
    );
  }
}

export default cart;
