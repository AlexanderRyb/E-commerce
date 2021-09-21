import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../my-redux/actions";

export class Products extends Component {
 
  render() {
  let cartItem="";
  if(this.props.cart != null){
    cartItem = this.props.cart.map((item)=>(
      <div key={item.id}>
        {item.id}
      </div>
    ))
  }

    
    return (
      <main>
        {this.props.items.map(item => 
        <div key={item.id} className='product-card'>
          {item.title}
       <img
        src={item.image}
         alt={`Preview of ${item.title}`}
       />
       <p className="description">{item.description}</p>
    <p className="price">{item.price} ₴</p>
  
       <button onClick={() => this.props.addToCart(item)}></button>
        
        </div>
        
        )}
        {cartItem}
      </main>
    );
  }
}
const mapStateToProps = state=> {
  return {
    cart: state.cart,
    items: state.items
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: item => dispatch(addToCart(item))


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
