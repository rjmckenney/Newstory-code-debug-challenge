import React from "react";
import { Link } from "react-router-dom";

import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
      <ul>
        <Link to="/" className="latest">
          Latest
        </Link>
        <Link to="/search" className="search">
          Search
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
