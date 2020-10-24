import { v4 as uuidv4 } from "uuid";
import { SET_ALARM, REMOVE_ALARM } from "./types";

export const setAlarm = () => (dispatch) => {
    const id = uuidv4();

    dispatch({
        type: SET_ALARM,
        payload: { msg, alarmType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALARM, payload: id }), 5000);
}

export const removeAlarm = (id) => (dispatch) => {
    dispatch({ type: REMOVE_ALARM, payload: id});
};