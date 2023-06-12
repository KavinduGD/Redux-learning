import { actions } from "./store";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());

    console.log(counter);
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>counter= {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
