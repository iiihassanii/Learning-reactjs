import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Hassan" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <div>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export { UserProvider, UserContext };
