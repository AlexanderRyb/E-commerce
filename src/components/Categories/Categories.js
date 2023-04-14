import "./styles.css";
import { connect } from "react-redux";
import { showComputers } from "../../my-redux/actions";
import { showLaptops } from "../../my-redux/actions";
import { showSmartphones } from "../../my-redux/actions";
import { showTablets } from "../../my-redux/actions";
import { showEveryCategory } from "../../my-redux/actions";



import React, { Component } from 'react'

export  class Categories extends Component {
    render() {
        return (
            <div className="categories-block">
                <div className="category" 
            onClick={() => this.props.showComputers()}
                
                > Computers</div>
                <div
            onClick={() => this.props.showLaptops()}
                
                className="category"> Laptops</div>
                <div 
            onClick={() => this.props.showSmartphones()}
                
                className="category"> Smartphones</div>
                 <div 
            onClick={() => this.props.showTablets()}
                
                className="category"> Tablets</div>
                <div 
            onClick={() => this.props.showEveryCategory()}
                
                className="category"> All</div>
                <div>
                <label for="sort">Sort by price:</label>
                <select id="sort" name="sort">
  <option value="name">Name</option>
  <option value="price-low-to-high">Price: Low to High</option>
  <option value="price-high-to-low">Price: High to Low</option>
</select>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
     
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      showComputers: () => dispatch(showComputers()),
      showLaptops: () => dispatch(showLaptops()),
      showSmartphones: () => dispatch(showSmartphones()),
      showTablets: () => dispatch(showTablets()),
      showEveryCategory: () => dispatch(showEveryCategory()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
