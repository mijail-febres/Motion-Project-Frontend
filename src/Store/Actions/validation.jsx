import { baseUrl } from "./loginAction";
import { USER_REGISTRATION } from "./actionTypes";

const validation = data => ({
    type: USER_REGISTRATION,
    payload: data
});

const validationAction = userData => async (dispatch, getState) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const body = JSON.stringify(userData);
    const config = {
        headers,
        body,
        method: 'PATCH'
    };
    const response = await fetch(`${ baseUrl }/auth/registration/validation`, config);
    if(response.status === 200) return null;
    const data = await response.json();
    const keys =Object.keys(data)
    return {[`${keys[0]}_detail`]: data[keys[0]]};
};

export default validationAction;