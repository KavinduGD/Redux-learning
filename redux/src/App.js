import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>Counter= {counter}</h1>
      {isLogged ? <h1>User logged</h1> : <h1>User not logged</h1>}

      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>

      <br></br>

      <button
        onClick={() => {
          dispatch({ type: "SIGN_IN" });
        }}
      >
        login togle
      </button>
    </div>
  );
}

export default App;
