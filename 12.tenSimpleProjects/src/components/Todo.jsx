import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-gray-200 w-full h-dvh flex flex-col justify-center items-center">
      <div className=" bg-gray-400 flex justify-center items-center rounded-2xl">
        <input
          className=" mx-8 my-10 p-2 bg-gray-300 rounded-2xl"
          type="text"
          placeholder="New Task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={handleSubmit}
          className="mr-8 bg-gray-950 text-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          Submit
        </button>
      </div>

      <ul className="bg-gray-400 my-4 rounded-2xl">
        {todos.map(({ text, id }) => (
          <li
            key={id}
            className="mx-8 my-2 p-2 bg-gray-300 rounded-2xl flex justify-between"
          >
            <span className="mr-10">{text}</span>{" "}
            <button
              onClick={() => removeTodo(id)}
              className="mr-2 bg-gray-950 text-white px-4 py-2 rounded-2xl cursor-pointer"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
