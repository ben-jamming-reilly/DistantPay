import { SET_ALARM, REMOVE_ALARM } from "../actions/types";

const initialState = [];

// Note to me, I might end up adding different types
// of alarms. For example one at the top of the page
// or ones which comes up as modals
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALARM:
            return [...state, payload];
        case REMOVE_ALARM:
            return state.filter((alarm) => alarm.id !== payload);
        default:
            return state;
    }
}