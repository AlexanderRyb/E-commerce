import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart} from "../../my-redux/actions";
import Categories from "../Categories/Categories";

import { addToWishList } from "../../my-redux/actions";
import { updateMaxPrice } from "../../my-redux/actions";
import { updateMinPrice } from "../../my-redux/actions";
import { updateSorting } from "../../my-redux/actions";
import {sortByName} from '../../my-redux/actions'
import { showEveryCategory } from "../../my-redux/actions";

export class Products extends Component {


  componentDidMount(){
    this.props.showEveryCategory()

  }
  componentDidUpdate(prevProps, prevState){

    if(prevProps !== this.props){
      this.setState(this.state)
    }
  }
  constructor(props){
    super(props);


    this.state = {
        selectedOption:"name"
    }





    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log("Event.target.value is", event.target.value);

    this.setState({selectedOption:event.target.value});
  }

  render() {
    
    let maxValue = this.props.maxValue
    let minValue = this.props.minValue
    let areSearchResultsEmpty 

    let displayedItems = [];
    if(this.props.searchResults === []){
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
        <div className="sorting">

        </div>
        <div className="slider">
        
        <div>Price</div>
      
          <input
          type="range"
          min={0}
          max={25000}
          defaultValue={0}

          id="min-price"
          onChange={(event) => this.props.updateMinPrice(event.target.value)}
          />
                     <h1 id="minValue">from {minValue}</h1>


        <input
            type="range"
            min={0}
            max={25000}
            id="max-price"
          defaultValue={25000}

            onChange={(event) => this.props.updateMaxPrice(event.target.value)}

          /> 


          <h1 id="rangevalue"  >to {maxValue}</h1>

          <div className="slider-wrapper">
 

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
    updateSorting: (value) => dispatch(updateSorting(value)),
    sortByName: () => dispatch(sortByName()),
    showEveryCategory: () => dispatch(showEveryCategory()),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
