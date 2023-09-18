// import {
//   createStore,
//   combineReducer,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// const reducers = combineReducers({
//   //create a reducer
// });
// const store = createStore(
//   reducers,
//   combineWithDevtools(applyMiddleware(thunkMiddleware))
// );
// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import cartItems from "./Reducers/cartItem"; // Import your reducer here

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunkMiddleware],
});

export default store;
