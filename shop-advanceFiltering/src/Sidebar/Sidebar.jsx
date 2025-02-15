import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
const Sidebar = ({handleChange}) => {
  return (
    <>
      <section className="sidebar fixed h-dvh border-r-1 border-zinc-200 w-56 flex flex-col items-center">
        <div className="logoConatiner">
          <h1>Logo</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
};

export default Sidebar;
