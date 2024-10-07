import { createContext, useState } from "react";
import JoblyApi from "./Api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = async (newUser) => {
    if (newUser && newUser.username) {
      const userData = await JoblyApi.getUser(newUser.username);
      setUserState({ ...newUser, ...userData });
    } else {
      setUserState(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};