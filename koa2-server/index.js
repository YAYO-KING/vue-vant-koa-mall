/**
 * Created by yanyue on 2020/4/24 11:05
 */
//引入koa2
const Koa = require("koa");
//生成应用
const app = new Koa();
//数据库的连接
const {connect} = require("./db/init");

//立即执行函数，连接数据库
(async () => {
    await connect()
})();


app.use(async (ctx) => {
    ctx.body = "<h1>Hello koa2</h1>"
});

//监听一个端口
app.listen(7005, () => {
    console.log("server started in 7005");
});


