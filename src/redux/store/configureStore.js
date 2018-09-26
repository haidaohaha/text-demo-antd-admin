import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducer/toduMenu';

import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = window.config || { menuName: '首页'};

const  configureStore = () => createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;
