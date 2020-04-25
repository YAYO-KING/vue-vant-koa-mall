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

//引入jwt认证中间件
const jwtutil = require("./utils/jwt.js");
//使用jwt中间件
app.use(jwtutil.jwtAuth);

//解决跨域问题，这边其实我本地的vue.config.js配置proxy已经可以了
const cors = require("koa2-cors");
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

//引入koa-bodyparser来解析post请求的body数据，也就是将post请求参数封装成对象
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());


const Router = require("koa-router");
const user = require("./api/UserRouter");
const home = require("./api/HomeRouter");
//装载所有的子路由
let router = new Router();
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


