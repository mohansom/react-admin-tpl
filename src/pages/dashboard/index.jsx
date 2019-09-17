import React from 'react'
import {connect} from 'react-redux'

import{addAge, addName} from '../../store/user/action'

const mapStatetoProps = (state) => {
    return{
        userInfo:state.modifyUserInfo,
    }
}
const mapDispatchToProps = {addAge,addName}

// Home = connect(mapStatetoProps,mapDispatchToProps)(Home)
@connect(mapStatetoProps,mapDispatchToProps)
class Home extends React.Component{
    render(){
        return(
            <div>
                <div>{this.props.userInfo.name}</div>
                <button onClick={this.props.addName}>加入ljf</button>
                {this.props.children}
            </div>
        )
    }
}

export default Home;
