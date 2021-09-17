import { USER_LOGOUT } from "./actionTypes";

const logout = () => {
    localStorage.clear();
    return {
        type: USER_LOGOUT,
        payload: ''
    }
}

export default logout