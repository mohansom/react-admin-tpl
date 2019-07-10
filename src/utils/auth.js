import Cookies from 'js-cookie';

const TOKEN_KEY = "Authorization"
/**
 * 设置cookies
 */
export const setToken = (token,expire) => {
    let expireTime = new Date(expire*1000);
    return Cookies.set(TOKEN_KEY,token,{expires:expireTime})
}
/**
获取cookies
 */
export const getToken = () => {
    return Cookies.get(TOKEN_KEY);
}

/**
 删除cookies
 */
export const removeToken = () => {
    Cookies.remove(TOKEN_KEY)
}