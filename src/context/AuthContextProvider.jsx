import { onAuthStateChanged } from "firebase/auth";
import React, { createContext } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return <authContext.Provider value={user}>
    {children}
  </authContext.Provider>;
};

export default AuthContextProvider;
