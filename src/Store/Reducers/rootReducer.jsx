import loginReducer from "./loginReducer";
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    loginReducer,
});

export default reducer;