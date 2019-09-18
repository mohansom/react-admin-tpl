/*
 * @Author: liujianfeng
 * @Date: 2019-09-17 19:19:55
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-17 22:07:27
 */
import React, {Component} from 'react';
import Routes from './router';
import {connect} from 'react-redux'
import { Layout } from 'antd';
const { Content, Footer } = Layout;

import{ userInfo,userDev } from './store/user/action'
import { isMobileDev } from './utils/utl'
import HeaderCustom from './components/HeaderCustom/HeaderCustom';
import SiderBarCustom from './components/SiderBarCustom/SiderBarCustom';


const mapStatetoProps = (state) => {
    return{
        getUserInfo:state.getUserInfo,
    }
}
const mapDispatchToProps = {userInfo,userDev}

@connect(mapStatetoProps,mapDispatchToProps)
export default class extends Component{
    state = {
        collapsed: false,
    };
    componentDidMount(){
        this._getClientWidth();
        window.onresize = () => {
            this._getClientWidth();
        };
    }
    _getClientWidth = () => {
        let clientWidth = window.innerWidth;
        this.props.userDev(isMobileDev(clientWidth))
        setTimeout(() => {
            console.log(this.props.getUserInfo.isMobileDev)
        },20)
        
    }
    render(){
        return(
            <Layout className="layout-wrap">
                <SiderBarCustom />
                <Layout>
                    <HeaderCustom/>
                    <Content>
                        <Routes/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin-Tpl ©{new Date().getFullYear()} Created by 610578197@qq.com
                    </Footer>
                </Layout>
                <style>
                    {`
                        .layout-wrap{
                            width: 100%;
                            height: 100%;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}