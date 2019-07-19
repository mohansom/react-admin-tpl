import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { routes } from './renderRoutes';

export default class extends Component{
    render(){
        return(
            <Switch>
                {
                    Object.keys(routes).map(key => (

                        routes[key].map(obj => {
                            const singleRouter = r => (
                                <Route
                                    key={r.path}
                                    exact
                                    path={r.path}
                                    render={props => (
                                        <r.component {...props}/>
                                    )}
                                />
                            )
                            const inlineRouter = r => (
                                r.map(item => {
                                    return singleRouter(item)
                                })
                            )

                            return obj.children ? inlineRouter(obj.children) : singleRouter(obj)
                        })
                    ))
                }
            </Switch>
        )  
    }
}