import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card flex flex-wrap w-56 p-4 border-1 border-zinc-200 mt-4 mx-2">
      <img src={img} alt="Shoe" />
      <div className="card-details w-full">
        <h3 className="mt-8 font-bold">{title}</h3>

        <section className="card-review flex flex-wrap items-center mt-2 ">
          {star}
          {star}
          {star}
          {star}
          <span className="total-review ml-2">{reviews}</span>
        </section>
        <section className="card-price mt-2">
          <div className="price flex justify-between">
            <div>
              <del className="mr-2">{prevPrice}</del>
              {newPrice}
            </div>
            <div className="bag cursor-pointer">
              <FaShoppingBag />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
