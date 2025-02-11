import { useEffect, useState } from "react";

const FetchdataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();
      if (postsData && postsData.length) setData(postsData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <h1 key={d.id}>{d.body} </h1>
      ))}
    </div>
  );
};

export default FetchdataEffect;
