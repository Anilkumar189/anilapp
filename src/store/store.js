import { createStore,combineReducers } from "redux";
import counterReducer from "./counterReducer";
import TodolistReducer from "./TodolistReducer";
import productReducer from "./product.reducer";
var store=createStore(combineReducers({counterReducer,TodolistReducer,productReducer}))
export default store;
