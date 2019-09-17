import React, {Component} from 'react';
import Routes from './router';
import { Layout } from 'antd';
const { Sider, Content, Footer } = Layout;

import HeaderCustom from './components/HeaderCustom/HeaderCustom';
import SiderBarCustom from './components/SiderBarCustom/SiderBarCustom';

export default class extends Component{
    render(){
        const imgSrc = require("./assets/images/logo.svg")
        return(
            <Layout className="layout-wrap">
                <Sider>
                    <img src={ imgSrc } className="App-logo" alt="logo"/>
                    <SiderBarCustom />
                </Sider>
                <Layout>
                    <HeaderCustom/>
                    <Content className="layout-content">
                        <Routes/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin-Tpl ©{new Date().getFullYear()} Created by 610578197@qq.com
                    </Footer>
                </Layout>
                <style>
                    {`
                        .App-logo{
                            width:100%;
                            height: 60px;
                            padding:10px 0;
                        }
                        .layout-wrap{
                            width: 100%;
                            height: 100%;
                            min-width: 1200px;
                        }
                        .layout-content{
                            padding: 15px;
                            background: #ffffff;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}