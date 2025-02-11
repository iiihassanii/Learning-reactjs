import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("HOLLE FORM BASIC EFFECT");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
