/*
 * @Author: liujianfeng
 * @Date: 2019-09-17 19:19:55
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-18 19:56:54
 */
import React, {Component} from 'react';
import Routes from './router';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

import { isMobileDevFun } from './utils/utl'
import HeaderCustom from './components/HeaderCustom/HeaderCustom';
import SiderBarCustom from './components/SiderBarCustom/SiderBarCustom';

export default class extends Component{
    state = {
        collapsed: false,
        bgDrawer: false
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    bgShow = () => {
        this.setState({
            bgDrawer: true
        })
    }
    siderbarHidden = () => {
        let selectDom =  document.querySelector(".siderbar-show")
        selectDom.style.left = "-200px"
        selectDom.style.transition = "left 0.5s"
        this.setState({
            bgDrawer: false
        })
    }
    componentDidMount(){
        this._getClientWidth();
        window.onresize = () => {
            this._getClientWidth();
        }
        window.onunload = () => {
            this._setUserInfoToLocalStorage()
        }
        window.onload = () => {
            this._clearLocalStorage()
        }
    }
    _getClientWidth = () => {
        let clientWidth = window.innerWidth;
        this.props.userDev(isMobileDevFun(clientWidth))
    }
    _setUserInfoToLocalStorage(){
        Object.keys(this.props.getUserInfo.userInfo).forEach(item => {
            localStorage.setItem(item,this.props.getUserInfo.userInfo[item])
        }) 
    }
    _clearLocalStorage(){
        this.props.userInfo({
            userName:localStorage.getItem("userName"),
            password:localStorage.getItem("password"),
            auth:localStorage.getItem("auth")
        })
        localStorage.clear()
    }
    render(){
        let { isMobileDev } = this.props.getUserInfo
        return(
            <Layout className="layout-wrap">
                { isMobileDev ? 
                    (   
                        <React.Fragment>
                            {
                                this.state.bgDrawer ?
                                (
                                    <div className="bg-drawer" onClick={this.siderbarHidden}>
                                    </div>
                                ) : null
                            }
                            <div className="siderbar-show">
                                <SiderBarCustom  siderbarHidden={this.siderbarHidden}/>
                            </div>
                        </React.Fragment> 
                    ) 
                    : (<SiderBarCustom collapsed={this.state.collapsed} />)
                }
                <Layout>
                    <HeaderCustom 
                        mobile={isMobileDev} 
                        toggle={this.toggle}
                        bgShow={this.bgShow}
                        collapsed={this.state.collapsed}
                        userInfo={this.props.userInfo}
                        getUserInfo={this.props.getUserInfo}  
                    />
                    <Content>
                        <Routes {...this.props}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin-Tpl ©{new Date().getFullYear()} Created by 610578197@qq.com
                    </Footer>
                </Layout>
                <style>{`
                    .layout-wrap{
                        height:100%
                    }
                    .bg-drawer{
                        position: absolute;
                        z-index: 999;
                        width: 100%;
                        height: 100%;
                        background: #000;
                        opacity: .3;
                        top: 0;
                    }
                    .siderbar-show{
                        position:absolute;
                        z-index: 1000;
                        height:100%;
                        width:200px;
                        left:-200px;
                    }
                `}</style>
            </Layout>
        )
    }
}
