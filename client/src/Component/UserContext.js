// UserContext.js
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (storedUsername) {
      setUsername(storedUsername);
    }

    setLoggedIn(isLoggedIn); // even if username is late, login state is set
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
