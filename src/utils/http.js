/*
 * @Autor: 刘建峰
 * @Date: 2019-07-11 09:43:55
 * @LastEditors: 刘建峰
 * @LastEditTime: 2019-07-11 10:14:29
 */

import axios from 'axios'
import qs from 'qs'
import { getToken,removeToken } from '@/utils/auth'
import base_url  from "./base_url";

const http = axios.create({
    baseURL: base_url,
    timeout:10000,
    withCredentials:true,
});

// 请求拦截器
http.interceptors.request.use(
    config => {
         // 每次发送请求之前判断是否存在token 
         // 如果存在，则统一在所有请求的header都加上token
        if(getToken()){
            config.headers['Authorization'] = getToken()
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
       if(response.status >= 200 && response.status < 300){
           return Promise.resolve(response)
       }else{
           return Promise.reject(response)
       }
    },
    error => {
        let status = error.response.status;
        switch(status){
            // 400 bad request(语法错误)
            case 400:
                break;
            // 401: unauthorized(未登录)
            case 401: 
                break;
            // 403: forbidden(token过期)
            case 403:
                removeToken();
                break;
            // 404: not found(请求不存在)
            case 404:
                break;
            // 其他未知错误
            default:
        }
        return Promise.reject(error);
    }
)

/** 
 * get方法
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const fetchGet = (url,params = {}) => {
    return new Promise((resolve,reject) => {
        http({
            url:url,
            params:params,
            method:'get'
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}
/** 
 * delete方法
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const fetchDelete = (url,params = {}) => {
    return new Promise((resolve,reject) => {
        http({
            url:url,
            params:params,
            method:'delete'
        })
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}
/** 
 * post方法
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const fetchPost = (url,params = {}) => {
    return new Promise((resolve,reject) => {
        http({
            url:url,
            data:qs.stringify(params),
            method:'post'
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}
/** 
 * put方法
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const fetchPut = (url,params = {}) => {
    return new Promise((resolve,reject) => {
        http({
            url:url,
            data:qs.stringify(params),
            method:'put'
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}
/** 
 * patch方法
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const fetchPatch = (url,params = {}) => {
    return new Promise((resolve,reject) => {
        http({
            url:url,
            data:qs.stringify(params),
            method:'patch'
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}