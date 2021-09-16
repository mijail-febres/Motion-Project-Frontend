import { USER_LOGIN } from "../Actions/actionTypes";
import { USER_LOGOUT } from "../Actions/actionTypes";

const initialState = {
    user: null,
    token: null,
    authenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                user: action.payload.user.user,
                token: action.payload.user.access,
                authenticated: action.payload.authenticated
            };
        case USER_LOGOUT:
            return {
                user: null,
                token: null,
                authenticated: false
            };
        default:
            return state;
    }
};

export default loginReducer