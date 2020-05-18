import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Login = ({ handleLogin }) => {
  const { auth, login, checkLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkLogin();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <h1>Log In</h1>
      {auth.errors &&
        auth.errors.map((error) => {
          return <li key={error}>{error}</li>;
        })}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="field">
          <button type="submit" className="btn">
            Log In
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
