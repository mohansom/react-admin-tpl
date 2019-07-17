import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';

import App from './App';
import asyncComponent from './utils/asyncComponent';
import { getToken } from './utils/auth';

const Login = asyncComponent(() => import('./pages/login'));
const NotFound = asyncComponent(() => import('./pages/NotFound'));

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/admin/dashboard" push/>}/>
            <Route path="/admin"  render={() => getToken() ? <App /> : <Redirect to="/login" replace/>} />
            <Route path="/login" render={() => getToken() ? <Redirect to="/" replace /> : <Login />} />
            <Route path="/404" render={() => getToken() ? <NotFound /> : <Redirect to="/login" replace />} />
            <Route render={() => getToken() ? <NotFound /> : <Redirect to="/login" replace />} />
        </Switch>
    </BrowserRouter>
)

