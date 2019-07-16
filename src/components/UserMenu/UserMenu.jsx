import React, {Component} from 'react';
import { Menu, Dropdown, Icon, Modal, message} from 'antd';
import { withRouter} from 'react-router-dom';
const { confirm } = Modal;

import { removeToken } from '../../utils/auth';
import './index.scss';

class UserMenu extends Component{
    handleChnagePass(){
        
    }
    handleLogout(){
        const self = this;
        confirm({
            centered:true,
            cancelText:'取消',
            okText:"确定",
            title: '提示',
            content: '你是否确定退出登录?',
            onOk() {
            
            },
            onCancel() {

            },
        });
    }
    render(){
        const menu = (
            <Menu>
                <Menu.Item onClick={this.handleChnagePass}>
                    <span>修改密码</span>
                </Menu.Item>
                <Menu.Item onClick={this.handleLogout.bind(this)}>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return(
            <Dropdown overlay={menu} trigger={['click']} className="f_right">
                <span className="dropdown-username">
                    fffxue
                </span>
                <Icon type="down" className="dropdown-name-icon" />
            </Dropdown>
        )
    }
}

export default withRouter(UserMenu);