/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");

const router = new Router();

router.post("/register", async (ctx) => {
    ctx.body = "用户注册接口";
});

module.exports = router;

