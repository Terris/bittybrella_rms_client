import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    let user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3001/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
  redirect = () => {
    this.props.history.push("/");
  };
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Log In</h1>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <button placeholder="submit" type="submit" className="btn">
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
  }
}
export default Login;
