/** @format */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";

const reducer = combineReducers({
  counter: counterReducer,
});

//const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  //initialState,
  compose(applyMiddleware(...middleware)),
);

export default store;
