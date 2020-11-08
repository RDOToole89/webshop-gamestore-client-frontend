import Axios from "axios";
import { API_URL } from "../../config";

export const loginUser = (userObject) => {
  return {
    type: "LOGIN_USER",
    payload: userObject,
  };
};

export const loginUserFromToken = (userObject) => {
  return {
    type: "LOGIN_USER_FROM_TOKEN",
    payload: userObject,
  };
};

export const logoutUser = () => {
  console.log("INSIDE LOGOUTUSER ACTION CREATOR?");
  return {
    type: "LOGOUT_USER",
  };
};

export const getUserData = async (token) => {
  try {
    const response = await Axios.post(`${API_URL}/login/me`, {
      token: token,
    });

    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getLoginToken = (email, password) => async (dispatch, getState) => {
  console.log("IN GET LOGINTOKEN?");

  try {
    const response = await Axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    const token = response.data.token;

    const userData = await getUserData(token);

    console.log(userData);

    if (response) {
      localStorage.setItem("JWTKEY", token);
      localStorage.setItem("USERNAME", userData.firstName);
    }

    dispatch(loginUser({ ...userData }));
  } catch (e) {
    console.log(e.message);
  }
};

export const bootstrapLoginState = () => async (dispatch, getState) => {
  const token = localStorage.getItem("JWTKEY");

  if (token) {
    const userData = await getUserData(token);
    localStorage.setItem("USERNAME", userData.name);
    // console.log("USERPROFILE LOADED!", token, userData);
    dispatch(loginUserFromToken(userData));
  } else {
    console.log("no token stored in localstorage");
  }
};
