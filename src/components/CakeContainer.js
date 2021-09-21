import React from "react";
import { connect } from 'react-redux'
import {buyCake} from '../redux'
import {returnCake} from '../redux'
import {reset} from '../redux'



function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake </button>
            <button onClick={props.returnCake}>Return Cake</button>
            <button onClick={props.reset}>reset</button>
            <p>pi: {props.test}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes,
        test: state.pi
    }
}
const mapDispatchToProps  = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        returnCake: () => dispatch(returnCake()),
        reset: () => dispatch(reset())
    }
}

export default connect (mapStateToProps,
     mapDispatchToProps
     ) ( CakeContainer)
