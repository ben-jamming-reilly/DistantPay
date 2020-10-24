import { combineReducers } from "redux";
import auth from "./auth";
import alarm from "./alarm";

export default combineReducers({
    auth,
    alarm,
});
