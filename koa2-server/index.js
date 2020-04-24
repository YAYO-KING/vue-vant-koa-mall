/**
 * Created by yanyue on 2020/4/24 11:05
 */
//引入koa2
const Koa = require("koa");
//生成应用
const app = new Koa();
//数据库的连接
const {connect, initSchemas} = require("./db/init");
//引入mongoose
const mongoose = require("mongoose");

const Router = require("koa-router");
const user = require("./api/UserRouter");
const home = require("./api/HomeRouter");
//装载所有的子路由
const router = new Router();
router.use("/user", user.routes());
router.use("/home", home.routes());
//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

//立即执行函数，连接数据库
(async () => {
    await connect();
    initSchemas();
})();


app.use(async (ctx) => {
    ctx.body = "<h1>Hello koa2</h1>"
});

//监听一个端口
app.listen(7005, () => {
    console.log("server started in 7005");
});


