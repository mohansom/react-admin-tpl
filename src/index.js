/*
 * @Author: liujianfeng
 * @Date: 2019-09-16 20:04:10
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-16 20:04:10
 */
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