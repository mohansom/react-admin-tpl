import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { routes } from './renderRoutes';

export default class extends Component{
    render(){
        
        return(
            <Switch>
                {
                    routes.map(obj => {
                        const singleRoute = r => {
                            return(
                                <Route
                                    key={r.path}
                                    exact
                                    path={r.path}
                                    render={props => (
                                        <r.component {...props}/>
                                    )}
                                />
                            )
                        }
                        const inlineRouter = r => (
                            r.map(item => {
                                return singleRoute(item)
                            })
                        )
                        return obj.children ? inlineRouter(obj.children) :  singleRoute(obj)
                    })
                }
            </Switch>
        )  
    }
}