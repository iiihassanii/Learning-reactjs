import Accordion from "./components/Accordion";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Meals from "./components/Meals";
import Testimonial from "./components/Testimonial";
import Todo from "./components/Todo";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="w-full py-10 flex justify-center items-center flex-col">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      <Testimonial />
      <HiddenSearchBar />
      <Counter />
      <Todo />

      <Calculator />
    </div>
  );
};

export default App;
