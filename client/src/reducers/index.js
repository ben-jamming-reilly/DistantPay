import { combineReducers } from "redux";
import auth from "./auth";
import alarm from "./alarm";
import user from "./user";

export default combineReducers({
  auth,
  alarm,
  user,
});
