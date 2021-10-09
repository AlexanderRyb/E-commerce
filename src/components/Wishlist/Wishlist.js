import React, { Component } from 'react'
import { connect } from "react-redux";


class Wishlist extends Component {
    render() {     

        let listOfWishedItems = [];
        console.log(this.props.wishList)
        listOfWishedItems = this.props.wishList.map((item) => (
          <div key={item.id} className="product-card">
            {item.title}
            <img src={item.image} alt={`Preview of ${item.title}`} />
            <p className="description">{item.description}</p>
            <p className="price">{item.price} ₴</p>
          
  <button className="favorite-button" >wishlist</button>
            <button  className="cart-button"></button>
          </div>
        ))
      

        return (
            <div>
                {listOfWishedItems}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      wishList: state.wishList,
      filteredItems: state.filteredItems
    
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
  