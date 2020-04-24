/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");
const mongoose = require("mongoose");

const router = new Router();

router.post("/register", async (ctx) => {
    let User = mongoose.model("User");
    let newUser = new User(ctx.request.body);
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: "注册成功"
        }
    }).catch(error => {
        console.log(error);
        ctx.body = {
            code: 500,
            message: error
        }
    })
});

module.exports = router;

