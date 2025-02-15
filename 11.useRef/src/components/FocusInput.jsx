import { useRef } from "react";

export const FocusInput = () => {
  const element = useRef(null);

  const HandleFocus = () => {
    element.current.focus();
  };
  return (
    <div>
      <input type="text" ref={element} placeholder="Hola" />
      <button onClick={HandleFocus}>Focus</button>
    </div>
  );
};
