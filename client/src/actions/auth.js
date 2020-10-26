import axios from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    let res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {

    // Put a dispatch auth error here
    const errors = err.response.data.errors;
    console.error(errors);
  }
};

export const signup = (userData) => async (dispatch) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  const body = JSON.stringify(userData);
  
  try {
    const res = await axios.post("/api/users/create");

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.error(errors);
  }
};

export const login = (userData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(userData);

  try {
    const res = await axios.post("/api/users/login");

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.error(errors);
  }
};