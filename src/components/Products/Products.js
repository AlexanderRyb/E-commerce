import "./styles.css";
import React, { Component } from "react";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      search: [],
    };
  }
  componentDidMount() {
    var retrievedData = localStorage.getItem("data");
    retrievedData = JSON.parse(retrievedData);

    if (retrievedData) {
      this.setState({ cart: retrievedData });
    }
  }

  addToCart(item) {
    let index = this.state.cart.findIndex(checkDuplicate);
//checks if the item is already present in the cart. Only adds it if it's not.
    function checkDuplicate(x) {
      return x.id === item.id;
    }
    if (index == -1) {
      this.setState({ cart: [...this.state.cart, item] });
      var stored = JSON.stringify(this.state.cart);
      localStorage.setItem("data", stored);
      console.log("not a duplicate");
    } else {
      this.setState({ cart: [...this.state.cart] });
      stored = JSON.stringify(this.state.cart);
      localStorage.setItem("data", stored);
      console.log("duplicate!");
    }
  }

  render() {

    const renderSearchResult = this.props.parentState.search.map(
      (searchedItem) => (
        <div key={searchedItem.id} className="product-card">
          {searchedItem.title}
          <img
            src={searchedItem.image}
            alt={`Preview of ${searchedItem.title}`}
          />
          <p className="description">{searchedItem.description}</p>
          <p className="price">{searchedItem.price} ₴</p>
          <button onClick={() => this.addToCart(searchedItem)}></button>
        </div>
      )
    );

    return <main>{renderSearchResult}</main>;
  }
}
export default Products;
