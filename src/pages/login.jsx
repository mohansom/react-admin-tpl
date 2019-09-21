import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import '../style/login.scss'

class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.userInfo({
                userName:values.username,
                password:values.password,
                auth:values.username
            })
            this.props.history.replace("/")
          }
        })
    }
    componentDidMount(){
        // 退出登入到login页面 刷新login页面前清理localstorage(不知道从哪里缓存的继续研究一下) 
        window.onunload = () => {
            localStorage.clear()
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const imageSrc = require("../assets/svg/logo.svg")
        return(
            <div className="login-wrap">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <img src={ imageSrc } alt="logo" className="admin-logo" />
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
} 

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default withRouter(WrappedNormalLoginForm);