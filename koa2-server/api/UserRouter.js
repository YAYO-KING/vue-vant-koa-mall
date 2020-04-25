/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");
const mongoose = require("mongoose");
const util = require("../utils/util");
const router = new Router();

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
                if (isMatch) {
                    ctx.body = {
                        code: 200,
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

module.exports = router;

