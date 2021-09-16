import { baseUrl } from "./loginAction";
import { userLogin } from "./loginActionbak.bak";
import { USER_REGISTRATION } from "./actionTypes";

const userRegistrationAction = email => ({
    type: USER_REGISTRATION,
    payload: email
})

const registrationAction = async email => {
    console.log('email')
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const body = {
        "email": email,
    };

    const method = 'POST'
    const config = {
        method,
        headers,
        body: JSON.stringify(body)
    };
    const response = await fetch(`${baseUrl}/backend/api/auth/registration/`, config);
    if(response.status === 200) return null;
    const data = await response.json();
    const keys = Object.keys(data)
    return { detail: data[keys[0]] };
};

export default registrationAction;