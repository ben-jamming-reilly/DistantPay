import { GET_USERS, MOD_USER, REMOVE_USER } from "../actions/types";

const initialState = {
  users: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        users: payload,
        loading: false,
      };
    case MOD_USER:
      return {
        users: [
          payload,
          ...state.users.filter((user) => user._id !== payload._id),
        ],
        loading: false,
      };
    case REMOVE_USER:
      return {
        users: [...state.users.filter((user) => user._id !== payload._id)],
        loading: false,
      };
    default:
      return state;
  }
}
