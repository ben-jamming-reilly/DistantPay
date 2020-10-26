import axios from "axios";

export const addItem = (itemData, image) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const body = new FormData();
  body.append("image", image[0]);
  body.append("data", JSON.stringify(imageData));

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
