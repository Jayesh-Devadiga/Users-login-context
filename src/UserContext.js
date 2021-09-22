import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userState, setUser] = useState({
    users: [
      { username: "jayesh", password: "jayesh" },
      { username: "abc", password: "abc" },
    ],
    isLoggedIn: false,
    user: {},
    pageToDisplay: "splash",
  });
  return <UserContext.Provider value={[userState, setUser]}>{props.children}</UserContext.Provider>;
};
