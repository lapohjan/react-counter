import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

class Counter extends Component {
  render() {
    return (
      <div className="app">
        <h1>Your score is: {this.props.ctr}</h1>
        <button onClick={this.props.onIncCounter}> Increment </button>
        <button onClick={this.props.onDecCounter}> Decrement </button>
        <button onClick={this.props.addCounter}> Add 5 </button>
        <button onClick={this.props.removeCounter}> Subtract 5 </button>
        <button onClick={this.props.resetCounter}> Reset </button>

        <div>
          <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
            Store result
          </button>
        </div>
        <ul>
          {this.props.storedResults.map((item) => (
            <li
              onClick={() => this.props.onDeleteResult(item.id)}
              key={item.id}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    addCounter: () => dispatch({ type: actionTypes.ADD, value: 50 }),
    removeCounter: () => dispatch({ type: actionTypes.REMOVE, value: 50 }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);