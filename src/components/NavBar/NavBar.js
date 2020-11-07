import React from "react";
import { NavLink } from "react-router-dom";
import CartDisplay from "../CartDisplay/CartDisplay";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-logo-box">
        <h3 className="NavBar-brand">WebSHOP Project</h3>
      </div>
      <ul className="NavBar-list">
        <NavLink exact={true} to="/">
          <li className="NavBar-list-item">Home</li>
        </NavLink>
        <NavLink to="/sigin">
          <li className="NavBar-list-item">Sign in</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="NavBar-list-item">Contact</li>
        </NavLink>
      </ul>
      <CartDisplay />
    </div>
  );
}

export default NavBar;
