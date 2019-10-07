import React,{ Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import { routes } from './renderRoutes';

export default class extends Component{
    isLogin = () => {
        let userName = this.props.getUserInfo.userInfo.userName || localStorage.getItem("userName")
        return userName === 'guest' || userName === 'admin'
    }
    render(){
        return(
            <Switch>
                {
                    Object.keys(routes).map(key => (
                        routes[key].map(obj => {
                            const singleRouter = r => (
                                this.isLogin() ? (
                                    <Route
                                        key={r.path}
                                        exact
                                        path={r.path}
                                        render={() => (
                                            <DocumentTitle title={r.title}>
                                                <r.component {...this.props}/>
                                            </DocumentTitle>
                                        )}/>
                                    ) : ( <Route render={() => <Redirect to="/login" />} />)
                            )
                            const inlineRouter = r => (
                                r.map(item =>  singleRouter(item))
                            )
                            return obj.children ? inlineRouter(obj.children) : singleRouter(obj)
                        })
                    ))
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )  
    }
}