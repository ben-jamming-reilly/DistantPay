import axios from "axios";

import { ADD_ITEM, MOD_ITEM, REMOVE_ITEM, VIEW_ITEMS } from "./types";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/items/all");
    dispatch({
      type: VIEW_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    // Put a dispatch auth error here
    const errors = err.response.data.errors;
    console.error(errors);
  }
};

export const addItem = (itemData, image) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const body = new FormData();
  body.append("image", image[0]);
  body.append("data", JSON.stringify(itemData));

  try {
    let res = await axios.post("/api/item", body, config);
  } catch (err) {
    // Put a dispatch auth error here
    const errors = err.response.data.errors;
    console.error(errors);
  }
};

export const modItem = (id, itemData, image) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const body = new FormData();
  body.append("image", image[0]);
  body.append("data", JSON.stringify(itemData));

  try {
    let res = await axios.post(`/api/item/${id}`, body, config);
  } catch (err) {
    // Put a dispatch auth error here
    const errors = err.response.data.errors;
    console.error(errors);
  }
};

export const removeItem = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  try {
  } catch (err) {
    // Put a dispatch auth error here
    const errors = err.response.data.errors;
    console.error(errors);
  }
};
