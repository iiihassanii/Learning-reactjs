import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchdataEffect from "./components/FetchdataEffect";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("OLG EFFECT");
    document.title = `increment ${value}`;
  }, [value]); // بس بيحصل تغغير لما الفاليو بتتغير
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me </button>

      <br />
      <BasicEffect />
      <br />
      <CounterEffect />
      <br />
      <FetchdataEffect />

      <br />
    </div>
  );
};

export default App;
