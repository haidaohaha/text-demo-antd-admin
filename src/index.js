import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRouter from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// import configureStore from './redux/store/configureStore';
import { default as store } from './store';
// const store = configureStore();

// 全局中文
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <IRouter />
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
