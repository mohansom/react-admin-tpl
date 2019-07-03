import React from 'react'
import { BrowserRouter,Route,Link } from 'react-router-dom';
import coures from './course'

class CourseIndex extends React.Component{
    render(){
        return(
            <div>
                <Link to="/education">coures</Link>
                <br/>
                <Link to="/education/2">video</Link>
                {this.props.children}
            </div>
        )
    }
} 

export default () =>(
    <BrowserRouter>
        <CourseIndex>
            <Route path="/education" component={coures}/>
        </CourseIndex>
    </BrowserRouter>
)