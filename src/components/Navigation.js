import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import "./Navigation.css";

const Navigation = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="navigation">
      <Link to="/" className="logo">
        Bitty Brella RMS
      </Link>
      {auth.isLoggedIn ? (
        <>
          <Link to="/pos">POS</Link>
          <Link to="/" onClick={logout}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
