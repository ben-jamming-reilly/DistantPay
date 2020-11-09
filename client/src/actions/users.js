import axios from "axios";
import { GET_USERS, MOD_USER, REMOVE_USER } from "./types";

import { setAlarm } from "./alarm";

export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/api/users");

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.error(errors);
      errors.forEach((error) => dispatch(setAlarm(error.msg, error.type)));
    }
  }
};

export const modUser = (userData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(userData);

  try {
    let res = await axios.post(`/api/modify/${userData._id}`, body, config);

    dispatch({
      type: MOD_USER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.error(errors);
      errors.forEach((error) => dispatch(setAlarm(error.msg, error.type)));
    }
  }
};

export const removeUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(userData);

  try {
    //let res = await axios.post("", body, config); do nothing
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.error(errors);
      errors.forEach((error) => dispatch(setAlarm(error.msg, error.type)));
    }
  }
};
