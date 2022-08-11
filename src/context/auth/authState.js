import React, { useEffect, useReducer } from "react";
import AuthContext from "./authContext";
import { authReducer } from "./authReducer";

const AuthState = (props) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])


  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
