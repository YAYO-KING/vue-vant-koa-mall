/**
 * Created by yanyue on 2020/4/24 21:19
 * 用户模块的接口
 */

const Router = require("koa-router");

const router = new Router();

router.get("/", async (ctx) => {
    ctx.body = "这是首页的数据";
});

module.exports = router;

