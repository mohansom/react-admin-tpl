import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import App from './App';
import asyncComponent from './utils/asyncComponent';

import{ userInfo,userDev } from './store/user/action'
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
    isLogin = () => {
        let userName = this.props.getUserInfo.userInfo.userName || localStorage.getItem("userName")
        return userName === 'guest' || userName === 'admin'
    }
    render(){
        let isLogin = this.isLogin()
        console.log(isLogin)
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => isLogin ? <Redirect to="/admin/dashboard" push/> : <Redirect to="/login" replace />}/>
                    <Route path="/admin"  render={ () => isLogin ? <App {...this.props}/> :  <Redirect to="/login" replace /> }/>
                    <Route path="/login"  render={ () => isLogin ? <Redirect to="/" replace /> : <Login {...this.props}/> }/>
                    <Route render={ () => isLogin ? <NotFound /> : <Redirect to="/login" replace /> }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

