/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");
const mongoose = require("mongoose");
const util = require("../utils/util");
const router = new Router();
const {JWT_EXPIRED, PRIVATE_KEY} = require("../utils/constants");
const jwt = require('jsonwebtoken');
const jwtutil = require("../utils/jwt.js");

//用户注册/user/register
router.post("/register", async (ctx) => {
    //util.OtherFn.sleep(5000);
    const User = mongoose.model("User");
    let newUser = new User(ctx.request.body);
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: "注册成功"
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error.errmsg
        }
    })
});

//用户登录/user/login
router.post("/login", async (ctx) => {
    let {username, password} = ctx.request.body;

    const User = mongoose.model("User");
    await User.findOne({username: username}).exec().then(async result => {
        if (result) {
            let newUser = new User();
            //请求中的密码和查询到的用户中的密码进行比较
            await newUser.comparePassword(password, result.password).then(isMatch => {

                // 生成token
                let token = jwt.sign(
                    {
                        username: username,// token 的主题 一般用来存用户 用户id
                    },
                    PRIVATE_KEY, // 是秘钥
                    {
                        expiresIn: JWT_EXPIRED // 设置token的过期时间
                    });

                if (isMatch) {
                    ctx.body = {
                        code: 200,
                        data: {token: 'Bearer ' + token},
                        message: isMatch
                    }
                } else {
                    ctx.body = {
                        code: 500,
                        message: "密码错误"
                    }
                }
            }).catch(error => {
                ctx.body = {
                    code: 500,
                    message: error.errmsg
                }
            });
        } else {
            ctx.body = {
                code: 500,
                message: "用户名不存在"
            }
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error.errmsg
        }
    })

});


//user/getUserInfo   获取用户信息接口
router.post('/getUserInfo', async (ctx) => {
    // 解析请求中token获取token加密的数据 username
    const User = mongoose.model("User");
    //let token = ctx.request.body;
    //解析token，获取之前的保存数据也就是username
    let decode = jwtutil.decode(ctx.request);
    console.log(decode);
    if (decode && decode.username) {
        await User.findOne({username: decode.username}).then(user => {
            if (user) {
                ctx.body = {
                    code: 200,
                    message: "用户查询成功",
                    data: user
                }
            } else {
                ctx.body = {
                    code: 500,
                    message: "用户查询失败",
                };
            }
        })
    } else {
        ctx.body = {
            code: 500,
            message: "用户信息查询失败",
        };
    }
});

module.exports = router;

