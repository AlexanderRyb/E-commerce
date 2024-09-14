import "./styles.css";
import { connect } from "react-redux";
import { showComputers, sortByName } from "../../my-redux/actions";
import { showLaptops } from "../../my-redux/actions";
import { showSmartphones } from "../../my-redux/actions";
import { showTablets } from "../../my-redux/actions";
import { showEveryCategory } from "../../my-redux/actions";
import React, { Component } from "react";
import {useState, useEffect} from 'react'

function Categories(props){
    return (
      <div className="categories-block">
        <div
          onClick={() => props.showEveryCategory()}
          className="category"
        >
          {" "}
          All
        </div>
        <div className="category" onClick={() => props.showComputers()}>
          {" "}
          Computers
        </div>
        <div onClick={() => props.showLaptops()} className="category">
          {" "}
          Laptops
        </div>
        <div onClick={() => props.showSmartphones()} className="category">
          {" "}
          Smartphones
        </div>
        <div onClick={() => props.showTablets()} className="category">
          {" "}
          Tablets
        </div>
      </div>
    );
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
