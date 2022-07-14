import React, { Component } from 'react'
import { connect } from "react-redux";


export class UserPage extends Component {
  render() {
    console.log(this.props.maxValue);
    console.log(this.props);

   

    return (
      <main>
      {this.props.test}
      
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    test: state.users[0].data
 
    

  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
