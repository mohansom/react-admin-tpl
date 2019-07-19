import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <Link to='/admin/education/videos'>coures</Link>
                <br/>
                <Link to={{pathname:`/admin/education/videos/123`}}>video</Link>
                {this.props.children}
            </div>
        )
    }
} 

