import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Signup = () => {
  const history = useHistory();
  const { auth, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    if (auth.user) {
      history.push("/");
    }
  }, [auth, history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, passwordConfirmation);
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
          <input
            placeholder="password confirmation"
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
          />
        </div>
        <div className="field">
          <button placeholder="submit" type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
