import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  const handleClick = (e) => {
    // Close the input if clicking outside
    if (e.target.tagName !== "INPUT") {
      setShowInput(false);
      setBgColor("bg-white");
    }
  };

  return (
    <section
      className={`${bgColor} h-dvh w-full flex justify-center items-center`}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          className="text-white p-2 rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <FaSearch
          onClick={(e) => {
            e.stopPropagation();
            setShowInput(true);
            setBgColor("bg-black");
          }}
          className="cursor-pointer"
        />
      )}
    </section>
  );
};

export default HiddenSearchBar;
