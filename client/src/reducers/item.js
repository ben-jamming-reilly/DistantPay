import { ADD_ITEM, MOD_ITEM, REMOVE_ITEM, GET_ITEMS } from "../actions/types";

const initialState = {
  items: [],
  loading: true,
};

export default function (state = initialState, actions) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    case MOD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item._id !== payload._id)],
      };
    default:
      return state;
  }
}
