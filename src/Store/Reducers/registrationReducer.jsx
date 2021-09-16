import { USER_REGISTRATION } from "../Actions/actionTypes";

const initialState = {
    email: "",
    username: "",
    code: "",
    password: "",
    password_repeat: "",
    first_name: "",
    last_name: ""
}
export const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_REGISTRATION:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}