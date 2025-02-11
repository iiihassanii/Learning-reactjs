import { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <dev>
      <h1>User profile </h1>
      <p>name: {user.name}</p>
    </dev>
  );
};

export default UserProfile;
