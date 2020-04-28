/**
 * Created by yanyue on 2020/4/24 21:19
 * 主页模块的接口
 */

const Router = require("koa-router");
let router = new Router();
const util = require("../utils/util");

router.get('/index', async (ctx) => {

    await util.FileFn.readJSONFile("./json/home.json").then(result => {
        ctx.body = {
            code: 200,
            message: "请求成功",
            data: result.data
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: "请求失败",
        }
    });
});

module.exports = router;

