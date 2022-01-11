import "./styles.css";
import { connect } from "react-redux";

import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div className="categories-block">
                <div className="category"> Computers</div>
                <div className="category"> Notebooks</div>
                <div className="category"> Smartphones</div>

                
            </div>
        )
    }
}
