import { createContext, useContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userInfo, setUserInfo] = useState(null);

  const loginHandler = async (akemail, akpassword) => {
    try {
      console.log("inside try");
      const response = await axios.post("/api/auth/login", {
        email: akemail,
        password: akpassword,
      });
      console.log({ response });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        setUserInfo(response.data.foundUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (akemail, akpassword) => {
    try {
      console.log("inside try");
      const response = await axios.post("/api/auth/signup", {
        email: akemail,
        password: akpassword,
      });
      console.log({ response });
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        setUserInfo(response.data.createdUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, signUpHandler, userInfo, setUserInfo, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
