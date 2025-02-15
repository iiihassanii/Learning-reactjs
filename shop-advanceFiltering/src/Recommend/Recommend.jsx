import Buttons from "../components/Buttons";

const Recommend = ({ handleClick }) => {
  return (
    <div className="recommnded-container ml-64 mt-8">
      <h2 className="mb-2 text-xl font-semibold">Recommnded</h2>
      <div className="recommneded-btns">
        <Buttons onClickHandler={handleClick} value="" title="All products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
      </div>
    </div>
  );
};

export default Recommend;
