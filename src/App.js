import React, {Component} from 'react';
import Routes from './router';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

import UserMenu  from './components/UserMenu/UserMenu';
import MenuBar from './components/MenuBar/MenuBar';
import './style/app.scss';

export default class extends Component{
    render(){
        const imgSrc = require("./assets/images/logo.svg")
        return(
            <Layout className="layout-wrap">
                <Header className="layout-header">
                    <img src={ imgSrc } className="App-logo" alt="logo"/>
                    <UserMenu />
                </Header>
                <Layout>
                    <Sider>
                        <MenuBar />
                    </Sider>
                    <Content className="layout-content">
                        <Routes/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}