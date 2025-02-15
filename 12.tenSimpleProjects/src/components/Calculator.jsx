import { useState } from "react";

const Calculator = () => {
  const buttons = [
    { label: "C", type: "clear", span: "col-span-2 bg-amber-500" },
    { label: "/", type: "operator" },
    { label: "*", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "-", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "+", type: "operator", span: "row-span-2 bg-zinc-700" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "0", type: "number" },
    { label: "00", type: "number" },
    { label: ".", type: "decimal" },
    { label: "=", type: "equals" },
  ];
  const [inputValue, setInputValue] = useState("");

  const handleClick = (label, type) => {
    if (type === "clear") {
      setInputValue("");
    } else if (type === "equals") {
      try {
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue("Error");
      }
    } else {
      setInputValue(inputValue + label);
    }
  };

  return (
    <div>
      <form
        name="calc"
        className="w-full h-dvh bg-zinc-900 flex justify-center items-center text-white gap-1"
      >
        <div className="h-80 w-60 grid grid-cols-4 bg-zinc-800 rounded-2xl">
          <input
            type="text"
            value={inputValue}
            className="col-span-4 h-20 px-2"
          />

          {buttons.map(({ label, type, span }) => (
            <span
              key={label}
              className={`${
                span || "bg-zinc-700"
              } flex justify-center items-center cursor-pointer hover:bg-zinc-600`}
              onClick={() => handleClick(label, type)}
            >
              {label}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Calculator;
