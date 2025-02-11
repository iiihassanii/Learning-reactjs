import { useState, useEffect } from "react";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const jsonData = await response.json();
      if (jsonData && jsonData.length) setData(jsonData);
    }
    
    getData();
  }, []);
  return (
    <div>
      {data.map((d) => (
        <h2 key={d.id}>{d.title}</h2>
      ))}
    </div>
  );
};

export default Todo;
