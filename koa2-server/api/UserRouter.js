/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");

let router = new Router();

router.post("/register", async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

module.exports = router;

