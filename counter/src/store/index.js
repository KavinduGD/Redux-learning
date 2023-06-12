import { legacy_createStore as createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  //only use synchronous code
  //we should not mutate the original state
  if (action.type == "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type == "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

export default store;
