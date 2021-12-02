import { USER_LOGIN } from "./actionTypes";
import { useDispatch } from "react-redux";

export const baseUrl = 'https://motion.propulsion-home.ch'

export const userLoginAction = user => ({
    type: USER_LOGIN,
    payload: user
});

export const userLogin = async (user, password) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = {
            "email": user,
            "password": password,
        };

    const method = 'POST'

    const config = {
        method,
        headers,
        body: JSON.stringify(body),
    };

    const response = await fetch(`${ baseUrl }/backend/api/auth/token/`, config);
    const data = await response.json();

    if(response.status === 200) {
        const { access } = data;
        localStorage.setItem('token', access)
        // dispatch(userLoginAction({ user: data, authenticated: true}));
        return null;
    }
    // dispatch(userLogin({ user: '', authenticated: false}));

    return data;
};