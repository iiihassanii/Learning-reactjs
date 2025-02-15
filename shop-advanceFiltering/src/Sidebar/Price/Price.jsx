import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="w-full mt-10">
      <h2 className="flex flex-col  items-center">Price</h2>

      <div className="ml-10 mt-1">
        <label className="flex items-start cursor-pointer">
          <input
            onChange={handleChange}
            type="radio"
            name="price"
            value=""
            className="hidden peer"
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
        value={50}
        name="price"
        label="$1 - $50"
      />
      <Input
        handleChange={handleChange}
        value={100}
        name="price"
        label="$51 - $100"
      />
      <Input
        handleChange={handleChange}
        value={150}
        name="price"
        label="$101 - $150"
      />
      <Input
        handleChange={handleChange}
        value={200}
        name="price"
        label="Over $150"
      />
    </div>
  );
};

export default Price;
