import { useContext } from "react";
import { Data, Data1 } from "../App";

/*
U can do it both ways

const Comptwo = () => {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return <h1>{`My name is ${name} and Im ${age} years old`}</h1>;
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </div>
  );
};*/

const Comptwo = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h1>{`My name is ${name} and Im ${age} years old`}</h1>
    </div>
  );
};

export default Comptwo;
