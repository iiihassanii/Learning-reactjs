import { useReducer, useState } from "react";
import reducer from "./CounterReducer";
const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "incrmentByAmount", payload: Number(inputValue) });
    setInputValue("");
  };
  const handleDescrement = () => {
    dispatch({ type: "descrmentByAmount", payload: Number(inputValue) });
    setInputValue("");
  };

  return (
    <div>
      <h1>New Counter!!!</h1>
      <h3>Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: "incrment" })}>+</button>
      <button onClick={() => dispatch({ type: "descrment" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <div>
        <h2>Increment and descrement by amount</h2>
        <input
          type="number"
          value={inputValue}
          id=""
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDescrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
