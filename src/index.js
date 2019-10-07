import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Page from './page';
import Store from './store/index';
import 'antd/dist/antd.css';
import './style/index.scss';


ReactDOM.render(
    <Provider store={Store}>
        <Page/>
    </Provider>,
    document.getElementById('root')
)