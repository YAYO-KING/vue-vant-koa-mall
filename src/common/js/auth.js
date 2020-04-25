/**
 * Created by yanyue on 2020/3/15 16:30
 * token的设置和获取
 */

import Cookies from 'js-cookie'
const TokenKey = 'token';

export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}
