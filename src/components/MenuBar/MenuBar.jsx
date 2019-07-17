import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Menu } from 'antd';

import { routes } from '../../router/renderRoutes';

// 一级菜单
const renderMenuItem = routes => (
    <Menu.Item
        key={routes.path}
    >
        <Link to={routes.path}>
            <span>{routes.title}</span>
        </Link>
    </Menu.Item>
)
    
// 内嵌菜单
const renderSubMenu = routes => (
    <Menu.SubMenu
        key={routes.path}
        title={ <span >{routes.title}</span> }    
    >
        {routes.children.map(item => renderMenuItem(item))}
    </Menu.SubMenu>
)


class MenuBar extends Component{
    render(){
        return(
            <div>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    { routes.map(element => (
                        element.children ?  renderSubMenu(element) : renderMenuItem(element)
                    ))}
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuBar);