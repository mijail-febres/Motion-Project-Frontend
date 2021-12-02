import loginReducer from "./loginReducer";
import sendMailReducer from "./sendMailReducer";
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    loginReducer: loginReducer, 
    sendMailReducer: sendMailReducer,
});

export default reducer;