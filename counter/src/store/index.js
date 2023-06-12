import { legacy_createStore as createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {};

const store = createStore(reducer);

export default store;
