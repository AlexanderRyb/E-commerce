import "./styles.css";
import { connect } from "react-redux";
import { showComputers } from "../../my-redux/actions";
import { showNotebooks } from "../../my-redux/actions";
import { showSmartphones } from "../../my-redux/actions";


import React, { Component } from 'react'

export  class Categories extends Component {
    render() {
        return (
            <div className="categories-block">
                <div className="category" 
            onClick={() => this.props.showComputers()}
                
                > Computers</div>
                <div
            onClick={() => this.props.showNotebooks()}
                
                className="category"> Notebooks</div>
                <div 
            onClick={() => this.props.showSmartphones()}
                
                className="category"> Smartphones</div>

                
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
      showNotebooks: () => dispatch(showNotebooks()),
      showSmartphones: () => dispatch(showSmartphones()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
