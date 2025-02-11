import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    updateUser(name);
  };

  return (
    <div>
      <form onSubmit={handleName}>
        <h1>Change the Name</h1>
        <input
          type="text"
          name={name}
          id=""
          onChange={(e) => setName(e.target.value)}
          placeholder="ENTER NEW NAME"
        />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default UpdateUser;
