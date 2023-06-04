import { useState, useContext, createContext } from "react";

import Cookie from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

const useAuthProvide = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser("login");
  };

  return { user, signIn };
};

const AuthProvider = ({ children }) => {
  const auth = useAuthProvide();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
