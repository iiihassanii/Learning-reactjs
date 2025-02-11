import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [counter, serCounter] = useState(0);

  useEffect(()=>{
    document.title = `counter: ${counter}`
  })
  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={() => serCounter(counter + 1)}>Increase +1</button>
    </div>
  );
};

export default CounterEffect;
