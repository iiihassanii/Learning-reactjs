import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="w-full flex justify-center ">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex flex-col w-1/2 my-1 bg-zinc-50 p-10"
      >
        <div className=" flex justify-between font-bold text-2xl">
          <div>{title}</div>
          <p className="cursor-pointer">{isActive ? "-" : "+"}</p>
        </div>
        {isActive ? <p className="mt-2">{content}</p> : ""}
      </div>
    </section>
  );
};

export default Accordion;
