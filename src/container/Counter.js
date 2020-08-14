import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {
    render() {
      return (
        <div>
          <h1>Your score is: {this.props.ctr} </h1>
          <button >Increase</button>
          <button >Decrease</button>
          <button >Add 5</button>
          <button>Remove 5</button>
          <button>Reset likes</button>
          </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter : () => dispatch({ type: "INCREMENT" }),
  };
};


export default connect (mapStateToProps, mapDispatchToProps) (Counter);