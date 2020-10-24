import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
};

export default function (state =  initialState, action) {
    const {type, payload} = action;
    
    switch (type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
              };
        case SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
              };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
              };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
              };
        case USER_LOADED:
            return {
                ...state,
                loading: false,
              };
        default:
            return state;
    }
    
}