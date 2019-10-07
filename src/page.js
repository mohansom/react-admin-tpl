import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';

import asyncComponent from './utils/asyncComponent';
import{ userInfo,userDev } from './store/user/action';

const Login = asyncComponent(() => import('./pages/Login'));
const NotFound = asyncComponent(() => import('./pages/NotFound'));

const mapStatetoProps = (state) => {
    return{
        getUserInfo:state.getUserInfo,
    }
}
const mapDispatchToProps = {userInfo,userDev}

@connect(mapStatetoProps,mapDispatchToProps)
export default class extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => <Redirect to="/admin/dashboard" push/> }/>
                    <Route path="/admin" render={ () => <App {...this.props}/> }/>
                    <Route path="/login" render={ () => <Login {...this.props}/> }/>
                    <Route path="/404" component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

