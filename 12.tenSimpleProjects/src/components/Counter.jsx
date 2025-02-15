import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh bg-black text-white">
      <h1 className="text-8xl font-bold mb-10">{count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="mx-10 bg-neutral-800 w-10 h-10 rounded-full cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="mx-10 bg-neutral-800 w-10 h-10 rounded-full cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
