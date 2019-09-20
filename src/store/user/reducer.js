/*
 * @Author: liujianfeng
 * @Date: 2019-09-18 19:36:54
 * @LastEditors: liujianfeng
 * @LastEditTime: 2019-09-19 00:17:55
 */
import * as user from './action-type';

const defaultState = {
    userInfo:{
        userName:"",
        password:"",
        auth:"",
    },
    isMobileDev:false
}

function userInfo(state,action){
    switch(action.type){
        case user.USER_INFO:
            return {...state,...action}
        default:
            return state
    }
}

function isMobileDev (state,acition){
    switch(acition.type){
        case user.USER_DEV:
            return acition.isMobileDev
        default:
            return state
    }
}

export const getUserInfo = (state = defaultState,action = {}) => {
    return{
        userInfo:userInfo(state.userInfo,action),
        isMobileDev:isMobileDev(state.isMobileDev,action)
    }
}