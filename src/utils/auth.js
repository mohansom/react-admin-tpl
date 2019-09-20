import Cookies from 'js-cookie';

const LANG_KEY = "Language"

/**
 * 设置
 */
export const setLanguage = (LANG) => {
    return  Cookies.set(LANG_KEY,LANG)
}

/**
 * 获取
*/
export const getLanguage = () => {
    return Cookies.get(LANG_KEY)
}

/**
 * 删除
 */
export const removeLanguage = () => {
    Cookies.remove(LANG_KEY)
}