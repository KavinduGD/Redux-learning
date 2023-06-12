import conterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: conterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
