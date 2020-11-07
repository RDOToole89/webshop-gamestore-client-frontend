import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoginToken } from "../../store/Signin/signinActions";
import { selectLoggedInUser } from "../../store/Signin/signinSelectors";
import "./Signin.css";

function Sigin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectLoggedInUser);
  const [signinData, setSigninData] = useState({ email: "", password: "" });

  const { email, password } = signinData;
  // console.log(_.isEmpty(userLoggedIn));
  // console.log(signinData);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getLoginToken(email, password));

    setInterval(() => {
      if (userLoggedIn.loginSuccess) {
        history.push("/");
      }
    }, 1000);
  };

  return (
    <div className="Signin">
      <div className="Signin-form-wrapper">
        <h2 className="Signin-form-header">Signin</h2>
        <form onSubmit={handleSubmit} className="Signin-form">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            className="Signin-form-input"
            onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
            value={signinData.email}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            className="Signin-form-input"
            onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
            value={signinData.password}
          />
          <button className="Signin-form-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Sigin;
