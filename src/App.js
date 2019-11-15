import React from "react";
import { Route, Redirect, withRouter } from "react-router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Search from "./components/Search";
import "./app.css";

function App() {
  return (
    <div>
      <Nav />
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Redirect to="/" />
    </div>
  );
}

export default withRouter(App);
