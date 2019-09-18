import React, {Component} from 'react';
import { Layout, Menu, Dropdown, Icon, Badge, Modal} from 'antd';
const { confirm } = Modal;
const { Header } = Layout;

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
            <Header className="head-wrap">
                <Icon       
                    type='menu-unfold'
                />
                <div style={{float:'right'}}>
                    <Icon type="arrows-alt" onClick={this.screenFull} />
                    <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                        <Icon type="notification" />
                    </Badge>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <span className="dropdown-username">
                            fffxue
                            <Icon type="down" className="dropdown-name-icon"/>
                        </span>
                    </Dropdown>
                </div>
            </Header>    
        )
    }
}
