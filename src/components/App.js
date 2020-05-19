import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../store/AuthContext";
import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import PointOfSale from "./pos/PointOfSale";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/pos" component={PointOfSale} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
