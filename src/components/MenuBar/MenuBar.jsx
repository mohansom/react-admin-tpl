import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Menu } from 'antd';

import { routes } from '../../router/renderRoutes';

// 一级菜单
const renderMenuItem = routes => (
    routes.map(item => {
        return(
            <Menu.Item
                key={item.path}
            >
                <Link to={item.path}>
                    <span>{item.title}</span>
                </Link>
            </Menu.Item>
        )
    })
)
    
// inline菜单
// const renderSubMenu = item => (
//     <Menu.Item>

//     </Menu.Item>
// );

class MenuBar extends Component{
    // static getDerivedStateFromProps(nextProps,prevState){

    // }
    componentDidMount(){
        // console.log(this.props)
    }
    render(){
        return(
            <div>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    { renderMenuItem(routes) }
                    {/* <SubMenu
                        key="sub1"
                        title={
                            <span>权限管理</span>
                        }
                    >
                        <Menu.Item key="5">路由拦截</Menu.Item>
                        <Menu.Item key="6">异地登录</Menu.Item>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuBar);