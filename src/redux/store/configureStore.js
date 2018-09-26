import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = window.config || { ebikeData: { menuName: '首页' } };

const configureStore = () => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
