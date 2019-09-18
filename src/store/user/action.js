import * as user from './action-type';

export const userInfo = (info) => {
    return{
        type:user.USER_INFO,
        ...info
    }
}

export const userDev = (isMobileDev) => {
    return{
        type:user.USER_DEV,
        isMobileDev
    }
}