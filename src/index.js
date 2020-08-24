import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);