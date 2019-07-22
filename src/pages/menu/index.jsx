import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component{
    render(){
        return(
            <div>
                <Link to={{pathname:"/admin/menu/option/1"}}>coures</Link>
            </div>
        )
    }
} 

