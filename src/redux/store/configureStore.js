import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './../reducer/toduMenu';
// console.log('svip-reducer', reducer);

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    // 此时的 初始化 要 慢于
    menuName: '首页'
};

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : undefined;
const configureStore = () =>
    createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            reduxDevtools
        )
    );
// const configureStore = () =>
//     createStore(
//         reducer,
//         applyMiddleware(thunk),
//             composeWithDevTools
//     );

export default configureStore;
