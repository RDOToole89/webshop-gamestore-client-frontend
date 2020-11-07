import Axios from "axios";
import { API_URL } from "../../config";

export const loginUser = (userObject) => {
  return {
    type: "LOGIN_USER",
    payload: userObject,
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

    if (response) {
      localStorage.setItem("JWTKEY", token);
      localStorage.setItem("USERNAME", userData.name);
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
    console.log("USERPROFILE LOADED!", token, userData);
  } else {
    console.log("no token stored in localstorage");
  }
};
