import { createContext } from "react";
import Compone from "./components/Compone";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Hassan";
  const age = 25;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <Compone />
        </Data1.Provider>
      </Data.Provider>

      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
};

export default App;
