const Input = ({ name, value, label, handleChange }) => {
  return (
    <div className="ml-10 mt-1">
      <label className="flex items-start cursor-pointer">
        <input
          onChange={handleChange}
          value={value}
          type="radio"
          name={name}
          className="hidden peer"
        />
        <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
        </div>
        <span className="ml-3 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Input;
