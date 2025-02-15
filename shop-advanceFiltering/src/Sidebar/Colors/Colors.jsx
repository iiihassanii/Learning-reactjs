import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="w-full mt-10">
      <h2 className="flex flex-col  items-center">Colors</h2>
      <div className="ml-10 mt-1">
        <label className="flex items-start cursor-pointer">
          <input
            onChange={handleChange}
            type="radio"
            name="color"
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
        value="black"
        name="color"
        label="Black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        name="color"
        label="Blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        name="color"
        label="Red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        name="color"
        label="Green"
        color="green"
      />
    </div>
  );
};

export default Colors;
