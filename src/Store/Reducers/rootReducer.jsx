import loginReducer from "./loginReducer";
import { combineReducers } from 'redux';

const reducer = combineReducers({
    loginReducer,
});

export default reducer;