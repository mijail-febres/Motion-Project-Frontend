import { USER_LOGOUT } from "./actionTypes";

export const logout = () => {
    localStorage.clear();
    window.location.reload()
    // return {
    //     type: USER_LOGOUT,
    //     payload: ''
    // }
}

// export default logout