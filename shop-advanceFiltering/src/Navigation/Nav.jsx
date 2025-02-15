import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange }) => {
  return (
    <nav className="flex justify-around items-center px-6 py-8 border-b-1 border-zinc-200">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className="py-1 px-2 bg-zinc-200 rounded-sm  focus:outline-none"
      />
      <div className="flex">
        <a href="" className="mx-4">
          <FiHeart size={20} color="#494949" />
        </a>
        <a href="" className="mx-4">
          <AiOutlineShoppingCart size={20} color="#494949" />
        </a>
        <a href="" className="mx-4">
          <AiOutlineUserAdd size={20} color="#494949" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
