import { createContext, useState } from "react";
import JoblyApi from "./Api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  const setUser = async (newUser) => {
    if (newUser === null) {
      setUserState(null);
    } else if (!user || (newUser && newUser.username !== user.username)) {
      const userData = await JoblyApi.getUser(newUser.username);
      setUserState({ ...newUser, ...userData });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};