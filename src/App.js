/*
 * @Author: liujianfeng
 * @Date: 2019-09-17 19:19:55
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-18 19:56:54
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
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount(){
        this._getClientWidth();
        window.onresize = () => {
            this._getClientWidth();
        };
    }
    _getClientWidth = () => {
        let clientWidth = window.innerWidth;
        this.props.userDev(isMobileDev(clientWidth))
    }
    render(){
        let { isMobileDev } = this.props.getUserInfo
        return(
            <Layout className="layout-wrap">
                { !isMobileDev && <SiderBarCustom collapsed={this.state.collapsed} />}
                <Layout>
                    <HeaderCustom 
                        mobile={isMobileDev} 
                        toggle={this.toggle}
                        collapsed={this.state.collapsed}
                    />
                    <Content>
                        <Routes/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin-Tpl ©{new Date().getFullYear()} Created by 610578197@qq.com
                    </Footer>
                </Layout>
                <style>{`
                    .layout-wrap{
                        height:100%
                    }
                `}</style>
            </Layout>
        )
    }
}