import { useEffect, useState } from "react";
import axios from "axios";
const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []); // This effect will only run once on mount

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section
        key={Math.floor(Math.random() * 5)}
        className="w-80 bg-yellow-200 mb-8 rounded-2xl p-4"
      >
        <img src={strMealThumb} alt="StrMeals" className="w-80 rounded-t-2xl" />
        <section className="flex justify-between my-4">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });
  return (
    <div className="bg-yellow-50 flex flex-wrap lg:justify-between sm:justify-center   px-10 items-center">
      {itemsList}
    </div>
  );
};

export default Meals;
