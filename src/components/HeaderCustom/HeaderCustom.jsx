import React, {Component} from 'react';
import screenfull from 'screenfull';
import { Layout, Menu, Dropdown, Icon, Modal} from 'antd';
const { Header } = Layout;

import './index.scss';
import SvgIcon from '../SvgIcon/SvgIcon'

export default class extends Component{
    state = {
        isFullscreen: false
    }
    screenFull = () => {
        this.setState({
            isFullscreen:!this.state.isFullscreen
        })
        screenfull.toggle()
    }
    render(){
        const language = require("../../assets/svg/language.svg")
        const avatar = require("../../assets/images/avatar.jpg")
        const menu = (
            <Menu>
                <Menu.Item>
                    <span>修改密码</span>
                </Menu.Item>
                <Menu.Item>
                    <span>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        const languageSelect = (
            <Menu>
                <Menu.Item>
                    <span>简体中文</span>
                </Menu.Item>
                <Menu.Item>
                    <span>Enhlish</span>
                </Menu.Item>
            </Menu>
        )
        return(
            <Header className="head-wrap">
                {
                    this.props.mobile ? <Icon type="menu-unfold" /> : (
                        <Icon
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    )
                }
                <div className="header-menu">
                    { this.props.mobile ? null : 
                            <Icon 
                                type={this.state.isFullscreen ? "shrink" : "arrows-alt"} 
                                onClick={this.screenFull}
                            />
                    }
                    <Dropdown overlay={languageSelect} trigger={['click']} placement="bottomCenter">
                        <span>
                            <img src={language} className="language" /> 
                        </span>  
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <span>
                            <img src={avatar} className="avatar" /> 
                        </span>
                    </Dropdown>
                </div>
                
            </Header>    
        )
    }
}
