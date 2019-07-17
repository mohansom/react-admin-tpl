import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { routes } from './renderRoutes';

export default class extends Component{
    render(){
        return(
            <Switch>
                {
                    routes.map(obj => {
                        const route = (r) => {
                            return(
                                <Route
                                    key={r.path}
                                    exact
                                    path={r.path}
                                    render={props => (
                                        <obj.component {...props}/>
                                    )}
                                />
                            )
                        }
                        return route(obj)
                    })
                }
            </Switch>
        )  
    }
}