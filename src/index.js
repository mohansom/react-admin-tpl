import React from 'react';
import ReactDOM from 'react-dom';
import Permission from './permission';
import {Provider} from 'react-redux';
import Store from './store/index';
import './style/index.scss';

ReactDOM.render(
    <Provider store={Store}>
        <Permission/>
    </Provider>,
    document.getElementById('root')
)