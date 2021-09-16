import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// Initital State
const InitialState = {
    user     : null,
    pass     : null,
    token    : null,
    userInfo : {}
};

// Define reducer
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'updateUser' :
            const newUser = {...state};
            newUser.user = action.payload;
            return newUser;
        case 'updatePass' :
            const newPass = {...state};
            newPass.pass = action.payload;
            return newPass;
        case 'updateToken':
            const newToken = {...state};
            newToken.token = action.payload;
            return newToken;
        case 'getUserInfo':
            const userInfo = {...state};
            userInfo.userInfo = action.payload;
            return userInfo ;
        default:
            return state;
    }
};

// Create Middleware
const middlewares = applyMiddleware(thunk);

// Create reducer
const store = createStore(reducer, middlewares);
// const store = createStore(reducer);

// Export reducer
export default store
