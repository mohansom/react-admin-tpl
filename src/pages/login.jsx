import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { userLogin } from '../api/user';
import { setToken } from '../utils/auth'

export default class extends React.Component{
    handleSubmit(){
        userLogin({
            username:"testuser",
            password:123456,
        })
        .then(res => {
            alert("傻B")
        })
        .catch(err => {
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <Form>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={() => this.handleSubmit()}>登录</Button>
                    </Form.Item>
                </Form>
               
            </div>
        )
    }
} 