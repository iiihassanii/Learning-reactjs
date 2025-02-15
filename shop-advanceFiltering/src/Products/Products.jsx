import Card from "../components/Card";

const Products = ({ result }) => {
  return (
    <section className="card-container flex flex-wrap my-4 ml-64 ">
      {result}
    </section>
  );
};

export default Products;
