/**
 * Created by yanyue on 2020/3/28 16:50
 * JWT 认证
 */

const koaJwt = require('koa-jwt');
const jwt = require("jsonwebtoken");
const {PRIVATE_KEY} = require('./constants');

const jwtutil = {
    jwtAuth: koaJwt({
        secret: PRIVATE_KEY,
        credentialsRequired: true // 设置为false就不进行校验了，游客也可以访问
    }).unless({
        path: [
            '/user/register',
            '/user/login',
            //"/good/insertAllGoodsInfo",
            //"/good/filterGoods"
            //"/good/insertCategory",
            //"/good/insertCategorySub",
        ], // 设置 jwt 认证白名单
    }),

    //解析token，获取数据
    decode: (req) => {
        let token = req.get("Authorization");
        if (token.indexOf("Bearer") === 0) {
            token = token.replace("Bearer ", "");
        }
        return jwt.verify(token, PRIVATE_KEY);
    }
};


module.exports = jwtutil;
