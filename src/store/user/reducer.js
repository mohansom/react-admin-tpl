/*
 * @Author: liujianfeng
 * @Date: 2019-09-18 19:36:54
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-18 19:55:50
 */
import * as user from './action-type';

const defaultState = {
    userInfo:{
        userName:"",
        role:"",
        avator:"", 
    },
    isMobileDev:false
}


export const getUserInfo = (state = defaultState,action = {}) => {
    switch(action.type){
        case user.USER_INFO:
            return {...state,userInfo:{...state.userInfo,...action}}
        case user.USER_DEV:
            return Object.assign({},state,{isMobileDev:action.isMobileDev})
        default:
            return {...state}
    }
}