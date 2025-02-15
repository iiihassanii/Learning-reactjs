import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div className="w-full mt-10">
      <h2 className="flex flex-col  items-center">Category</h2>

      <div className="ml-10 mt-1">
        <label className="flex items-start cursor-pointer">
          <input
            onChange={handleChange}
            type="radio"
            name="sneakers"
            className="hidden peer"
            value=""
            defaultChecked
          />
          <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
          </div>
          <span className="ml-3 text-gray-700">All</span>
        </label>
      </div>

      <Input
        handleChange={handleChange}
        value="sneakers"
        name="sneakers"
        label="Sneakers"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        name="sneakers"
        label="Flats"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        name="sneakers"
        label="Sandals"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        name="sneakers"
        label="Heels"
      />
    </div>
  );
};

export default Category;
