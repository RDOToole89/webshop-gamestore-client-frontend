import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/Signin/signinActions";
import { selectLoggedInUser } from "../../store/Signin/signinSelectors";
import CartDisplay from "../CartDisplay/CartDisplay";
import "./NavBar.css";

function NavBar() {
  const dispatch = useDispatch();
  const userData = useSelector(selectLoggedInUser);
  // console.log(userData);

  return (
    <div className="NavBar">
      <div className="NavBar-logo-box">
        <h3 className="NavBar-brand">Amazon</h3>
      </div>
      {!userData.loginSuccess ? (
        <p className="NavBar-welcomeBox"></p>
      ) : (
        <p>Welcome {userData.user.name}!</p>
      )}
      <ul className="NavBar-list">
        <NavLink exact={true} to="/">
          <li className="NavBar-list-item">Home</li>
        </NavLink>
        {userData.loginSuccess ? (
          <NavLink to="/">
            <li onClick={() => dispatch(logoutUser())} className="NavBar-list-item">
              Logout
            </li>
          </NavLink>
        ) : (
          <NavLink to="/signin">
            <li className="NavBar-list-item">Sign in</li>
          </NavLink>
        )}
        <NavLink to="/contact">
          <li className="NavBar-list-item">Contact</li>
        </NavLink>
        {userData.user.isAdmin && (
          <NavLink to="/admin">
            <li className="NavBar-list-item">Admin Panel</li>
          </NavLink>
        )}
      </ul>
      <CartDisplay />
    </div>
  );
}

export default NavBar;
