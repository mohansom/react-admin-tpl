import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { Menu } from 'antd';

import {routes } from '../../router/renderRoutes';

// 一级菜单
const renderMenuItem = route => (
    <Menu.Item
        key={route.path}
    >
        <Link to={route.path}>
            <span>{route.title}</span>
        </Link>
    </Menu.Item>
)
    
// 内嵌菜单
const renderSubMenu = route => (
    <Menu.SubMenu
        key={route.path}
        title={ <span >{route.title}</span> }    
    >
        {route.children.map(item => renderMenuItem(item))}
    </Menu.SubMenu>
)

@withRouter
class MenuBar extends Component{
    static getDerivedStateFromProps (props, state){
        if(state.selectedKey.split("/").length > 3){
            return{
                isHidden:false
            }
        }
        return null;
    }
    static setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        }
    } 
    state = {
        openKey: '',
        selectedKey: '',
        isHidden : true, // SubMenu初始状态为闭合
    }
    componentDidMount(){
        const state = MenuBar.setMenuOpen(this.props);
        this.setState(state);
    }
    // 点击Item title
    menuClick(e){
        this.setState({
            selectedKey: e.key
        });
    }
    // 点击SubMenu title
    openMenu(v){
        this.setState({
            openKey: v[v.length - 1],
            isHidden: false
        })
    }
    render(){
        const { selectedKey, openKey, isHidden } = this.state
        return(
            <Menu
                mode="inline"
                theme="dark"
                onClick={(e) => this.menuClick(e)}
                selectedKeys={[selectedKey]}
                openKeys={isHidden ? null : [openKey]}
                onOpenChange={(v) => this.openMenu(v)}
            >
                { routes.menu.map(element => (
                    element.children ?  renderSubMenu(element) : renderMenuItem(element)
                ))}
            </Menu>
        )
    }
}

export default MenuBar;