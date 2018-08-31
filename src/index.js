import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <IRouter />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
