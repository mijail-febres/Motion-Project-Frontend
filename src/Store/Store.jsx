import { createStore, applyMiddleware } from 'redux';

import reducer from './Reducers/rootReducer';
import thunk from 'redux-thunk';

// const initialState = {

// }

const middlewares = applyMiddleware(thunk);
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, middlewares);

export default store