import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes/router';
import createBrowserHistory from 'history/createBrowserHistory';
require('es6-promise').polyfill(); // 兼容IE
import './components/common/main';
import './fonts/iconfont.css';

import configureStore from './utils/configureStore';

const store = configureStore();

// accept hot replace
// if (module.hot) {
//     module.hot.accept();
// }

render(
    <Provider store={store}>
        <Routes history={createBrowserHistory()}/>
    </Provider>,
    document.getElementById('app')
);
