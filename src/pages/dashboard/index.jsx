import React from 'react'
import PropTypes from 'prop-types'

const Greeting  = (props) => {
    return(
        <div>
            {props.name}
        </div>
    )
}

Greeting.propTypes = {
    name:PropTypes.string
}

class Home extends React.Component{
    render(){
        return(
            <Greeting name={'Home'} />
        )
    }
}

export default Home;
