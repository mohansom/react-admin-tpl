import { fetchGet,fetchPost } from "../utils/http";

/**
 * 登入
 * @param {Object} params 
 */
export const userLogin = (params) => {
    return fetchPost("/login",{
        username:params.username,
        password:params.password,
        client_id:"client",
        client_secret:"secret",
        grant_type:"password"
    })
}