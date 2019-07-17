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
    // static getDerivedStateFromProps(nextProps,prevState){
    //     console.log(prevState)
    //     return null
    // }
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
        firstHide : true, // SubMenu初始状态为闭合
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
            firstHide: false
        })
    }
    render(){
        const { selectedKey, openKey, firstHide } = this.state
        return(
            <div>
                <Menu
                    mode="inline"
                    theme="dark"
                    onClick={(e) => this.menuClick(e)}
                    selectedKeys={[selectedKey]}
                    openKeys={firstHide ? null : [openKey]}
                    onOpenChange={(v) => this.openMenu(v)}
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