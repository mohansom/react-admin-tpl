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
            return {...state};
        case user.USER_DEV:
            return Object.assign({},state,{isMobileDev:action.isMobileDev})
        default:
            return {...state}
    }
}