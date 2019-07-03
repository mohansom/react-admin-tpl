import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Router from './router/index'
import Store from './store/index'

ReactDOM.render(
    <Provider store={Store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
)