import { baseUrl } from "./loginAction";
import { USER_REGISTRATION } from "./actionTypes";

export const validation = data => ({
    type: USER_REGISTRATION,
    payload: data
});

const validationAction = async (email, code, username, firstName, lastName, password, passwordRepeat) => {
    console.log('ok')
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = {
        "email": email,
        "username": username,
        "code": code,
        "password": password,
        "password_repeat": passwordRepeat,
        "first_name": firstName,
        "last_name": lastName
    };

    const method = 'PATCH'

    const config = {
        method,
        headers,
        body: JSON.stringify(body),
    };
    const response = await fetch(`${ baseUrl }/backend/api/auth/registration/validation`, config);
    if(response.status === 200) return null;
    const data = await response.json();
    const keys =Object.keys(data)
    return {[`${keys[0]}_detail`]: data[keys[0]]};
};

export default validationAction;