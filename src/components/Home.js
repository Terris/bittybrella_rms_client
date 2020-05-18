import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Home = () => {
  const { auth, logout, checkLogin } = useContext(AuthContext);

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <br></br>
      {auth.isLoggedIn ? (
        <Link to="/" onClick={logout}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};
export default Home;
