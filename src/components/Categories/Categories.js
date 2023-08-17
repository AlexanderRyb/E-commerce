import "./styles.css";
import { connect } from "react-redux";
import { showComputers, sortByName } from "../../my-redux/actions";
import { showLaptops } from "../../my-redux/actions";
import { showSmartphones } from "../../my-redux/actions";
import { showTablets } from "../../my-redux/actions";
import { showEveryCategory } from "../../my-redux/actions";

import React, { Component } from "react";

export class Categories extends Component {
  handleOptionChange = (event) => {
    switch (event.target.value) {
      case 'name':
        this.props.sortByName();
        break;
      // case 'price-low-to-high':
      //   this.props.sortByPriceHighToLow();
      //   break;
      // case 'price-high-to-low':
      //   this.props.sortByPriceLowToHigh();
      //   break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="categories-block">
        <div className="category" onClick={() => this.props.showComputers()}>
          {" "}
          Computers
        </div>
        <div onClick={() => this.props.showLaptops()} className="category">
          {" "}
          Laptops
        </div>
        <div onClick={() => this.props.showSmartphones()} className="category">
          {" "}
          Smartphones
        </div>
        <div onClick={() => this.props.showTablets()} className="category">
          {" "}
          Tablets
        </div>
        <div
          onClick={() => this.props.showEveryCategory()}
          className="category"
        >
          {" "}
          All
        </div>
        {/* <div>
          <label for="sort">Sort by</label>
          <select id="sort" name="sort" onChange={this.handleOptionChange}>
            <option value="name"> Name</option>
            <option value="price-low-to-high">Price, Low to High</option>
            <option value="price-high-to-low">Price, High to Low</option>
          </select>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    showComputers: () => dispatch(showComputers()),
    showLaptops: () => dispatch(showLaptops()),
    showSmartphones: () => dispatch(showSmartphones()),
    showTablets: () => dispatch(showTablets()),
    showEveryCategory: () => dispatch(showEveryCategory()),
    sortByName: ()=> dispatch(sortByName())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
