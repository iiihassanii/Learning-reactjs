import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommend from "./Recommend/Recommend";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
//db
import data from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [query, setQuery] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----- radio -----
  const handleChange = (e) => setSelectedQuery(e.target.value);
  // ----- buttons -----
  const handleClick = (e) => setSelectedQuery(e.target.value);

  function filterProducts(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    //selected data
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, newPrice, company, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filterProducts(data, selectedQuery, query);

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommend handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
