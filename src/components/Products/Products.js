import "./styles.css";
import { connect } from "react-redux";
import { addToCart} from "../../my-redux/actions";
import Categories from "../Categories/Categories";

import { addToWishList } from "../../my-redux/actions";
import { removeFromWishList } from "../../my-redux/actions";

import { updateMaxPrice } from "../../my-redux/actions";
import { updateMinPrice } from "../../my-redux/actions";
import { updateSorting } from "../../my-redux/actions";
import {sortByName} from '../../my-redux/actions'
import { showEveryCategory } from "../../my-redux/actions";
import { useEffect} from 'react'

function Products(props) {
  //const [selectedOption, setSelectedOption] = useState('name');

  useEffect(() => {
    showEveryCategory(); // Call prop function on mount
  }, []); // Empty dependency array for initial call only

    
    let maxValue = props.maxValue
    let minValue = props.minValue

    let displayedItems = props.searchResults.map((item) => (
        <div key={item.id} className="product-card">
          {item.title}
          <img src={item.image} alt={`Preview of ${item.title}`} />
          <p className="description">{item.description}</p>
          <p className="price">{item.price} ₴</p>
          <button
            onClick={() => {
              props.wishList.some((e) => e.id === item.id)
                ? props.removeFromWishList(item) // Item already in wishlist, remove it
                : props.addToWishList(item); // Item not in wishlist, add it
            }}
            className={
              props.wishList.some((e) => e.id === item.id)
                ? "wishlist-button-selected"
                : "wishlist-button-unselected"
            }
          ></button>
          <button
            onClick={() => props.addToCart(item)}
            className={
              props.userCart.some((e) => e.id === item.id)
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
        <h1 id="minValue">from {minValue}</h1>

          <input
          type="range"
          min={0}
          max={25000}
          defaultValue={0}

          id="min-price"
          onChange={(event) => props.updateMinPrice(event.target.value)}
          />

<h1 id="rangevalue"  >to {maxValue}</h1>

        <input
            type="range"
            min={0}
            max={25000}
            id="max-price"
            
          defaultValue={25000}

            onChange={(event) => props.updateMaxPrice(event.target.value)}

          /> 



          <div className="slider-wrapper">
 

</div>
        </div>        

        

        {displayedItems}
      </main>
    );
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
    removeFromWishList: (item) => dispatch(removeFromWishList(item)),
    updateMaxPrice: (value) => dispatch(updateMaxPrice(value)),
    updateMinPrice: (value) => dispatch(updateMinPrice(value)),
    updateSorting: (value) => dispatch(updateSorting(value)),
    sortByName: () => dispatch(sortByName()),
    showEveryCategory: () => dispatch(showEveryCategory()),


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
