import { useRef } from "react";
import { FocusInput } from "./components/FocusInput";
import Timer from "./components/Timer";

const App = () => {
  const element = useRef(null);
  console.log(element);

  const fucusInput = () => {
    element.current.focus();
    element.current.value = "Hassan";
  };
  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={fucusInput}>Try Focus</button>

      <div>
        <h1>Practic</h1>
        <FocusInput />
        <br />
        <Timer />
      </div>
    </div>
  );
};

export default App;
