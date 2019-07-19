import React from 'react'
import { Switch,Route } from 'react-router-dom'

export default class extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path={`${this.props.match.path}`} render={route => {
                            return <div>course</div> 
                    }}/>
                    <Route path={`${this.props.match.path}/:id`} render={route => {
                            return <div>{route.match.params.id}</div> 
                    }}/>
                </Switch>
            </div>
        )
    }
} 