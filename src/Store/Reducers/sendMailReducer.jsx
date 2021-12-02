import { SEND_MAIL } from "../Actions/actionTypes";
const initialState = {
    email: null,
};

const sendMailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MAIL:
            let newState = {...state}
            newState.email = action.payload;
            console.log('new State',newState.email)
            return newState;
        default:
            return state;
    }
};

export default sendMailReducer;