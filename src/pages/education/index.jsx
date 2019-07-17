import React from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom';

export default class  extends React.Component{
    render(){
        return(
            <div>
                <Link to="admin/education">coures</Link>
                <br/>
                <Link to="admin/education/2">video</Link>
                {this.props.children}
            </div>
        )
    }
} 
