import { useReducer } from "react";
import Counter from "./components/Counter";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrment":
      return { ...state, count: state.count + 1 };
    case "decrment":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      break;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "incrment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrment" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>

      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
