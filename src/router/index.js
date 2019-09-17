import React,{ Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
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
                                        <DocumentTitle title={r.title}>
                                            <r.component {...props}/>
                                        </DocumentTitle>
                                    )}
                                />
                            )
                            const inlineRouter = r => (
                                r.map(item =>  singleRouter(item))
                            )
                            return obj.children ? inlineRouter(obj.children) : singleRouter(obj)
                        })
                    ))
                }
            </Switch>
        )  
    }
}