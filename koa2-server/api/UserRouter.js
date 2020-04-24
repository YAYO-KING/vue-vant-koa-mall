/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");
const mongoose = require("mongoose");
const util = require("../utils/util");
const router = new Router();

router.post("/register", async (ctx) => {
    //util.OtherFn.sleep(5000);
    let User = mongoose.model("User");
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

module.exports = router;

