import { useState, useContext, createContext } from "react";

import endPoints from "../services/api";

import Cookie from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

const useAuthProvide = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    const { data: authData } = await axios.post(endPoints.auth.login, { email, password }, options);

    if (authData) {
      const token = authData.access_token;
      Cookie.set("token", token, { expires: 5 });

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { data: userData } = await axios.get(endPoints.auth.profile);
      setUser(userData);
    }
  };

  const logOut = () => {
    Cookie.remove("token");
    delete axios.defaults.headers.common.Authorization;
    setUser(null);
  };

  return { user, signIn, logOut };
};

const AuthProvider = ({ children }) => {
  const auth = useAuthProvide();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
