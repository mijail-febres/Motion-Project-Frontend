import { SEND_MAIL } from "./actionTypes";
import { useDispatch } from "react-redux";

const sendMailAction = (email) => (dispatch, getState) => {
    console.log('here')
    const action = {
        type: SEND_MAIL,
        payload: email
    };
    dispatch(action)
};

export default sendMailAction;