import "./styles.css";
import { connect } from "react-redux";
import { showComputers } from "../../my-redux/actions";
import { showLaptops } from "../../my-redux/actions";
import { showSmartphones } from "../../my-redux/actions";
import { showTablets } from "../../my-redux/actions";


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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
