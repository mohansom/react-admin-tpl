import React, {Component} from 'react';
import { Menu, Dropdown, Icon, Modal, message} from 'antd';
const { confirm } = Modal;

import { removeToken } from '../../utils/auth';
import './index.scss';

export default class extends Component{
    ChangePassword(){
        
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
                <Menu.Item onClick={() => this.ChangePassword()}>
                    <span>修改密码</span>
                </Menu.Item>
                <Menu.Item onClick={() => this.handleLogout()}>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return(
            <Dropdown overlay={menu} trigger={['hover']} className="dropdown-wrap">
                <span className="dropdown-username">
                    fffxue
                    <Icon type="down"  className="dropdown-name-icon"/>
                </span>
            </Dropdown>
        )
    }
}
