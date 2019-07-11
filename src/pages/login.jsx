import React from 'react';
import { userLogin } from '../api/user';
import { setToken } from '../utils/auth'

export default class extends React.Component{
    handleSubmit(){
        userLogin({
            username:"testuser",
            password:123456,
        })
        .then(res => {
            alert("小傻X")
        })
        .catch(err => {
            alert("大傻X")
        })
    }
    render(){
        return(
            <div>
                <button onClick={() => this.handleSubmit()}>登入</button>
            </div>
        )
    }
} 