import React, { useReducer, createContext, useEffect } from "react";
import AuthReducer from "./AuthReducer";
import axios from "axios";

const initialState = {
  loading: true,
  isLoggedIn: false,
  user: null,
  errors: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    checkLogin();
  }, []);

  // ACTIONS
  async function login(email, password) {
    const user = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/login",
        { user },
        { withCredentials: true }
      );
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
        payload: err,
      });
    }
  }

  async function checkLogin() {
    try {
      const res = await axios.get("http://localhost:3001/logged_in", {
        withCredentials: true,
      });
      if (res.data.logged_in) {
        dispatch({
          type: "CHECK_LOGIN",
          payload: {
            isLoggedIn: true,
            user: res.data.user,
          },
        });
      } else {
        dispatch({
          type: "LOGOUT",
          payload: {},
        });
      }
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
        payload: err,
      });
    }
  }

  // sign up
  async function logout() {
    try {
      const res = await axios.delete("http://localhost:3001/logout", {
        withCredentials: true,
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
    } catch (err) {}
  }

  return (
    <AuthContext.Provider
      value={{
        auth: state,
        checkLogin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
