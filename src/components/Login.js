import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3001/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response.data);
          redirect();
        } else {
          setErrors({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const redirect = () => {
    history.push("/");
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Log In</h1>
      <div>{errors ? handleErrors() : null}</div>
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
