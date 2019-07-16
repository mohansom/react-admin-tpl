import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Permission from './permission';
import Store from './store/index';
import './style/index.scss';
import 'antd/dist/antd.css';


ReactDOM.render(
    <Provider store={Store}>
        <Permission/>
    </Provider>,
    document.getElementById('root')
)