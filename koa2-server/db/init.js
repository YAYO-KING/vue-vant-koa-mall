/**
 * Created by yanyue on 2020/4/24 11:37
 * 数据库的初始化操作：连接数据库
 */

//引入mongoose
const mongoose = require("mongoose");
//数据库的的地址(如果没有改数据库的话，会自动创建的)
const dbUrl = "mongodb://localhost:27017/vue-koa-mall";

exports.connect = () => {
    //连接数据库
    mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

    //增加数据库的监听事件
    //当数据库断开的时候
    mongoose.connection.on("disconnected", () => {
        console.log("*************************数据库断开**************************");
        mongoose.connect(dbUrl);
    });

    //当数据库发生错误的时候
    mongoose.connection.on("error", () => {
        console.log("*************************数据库错误**************************");
        mongoose.connect(dbUrl);
    })

    //数据库打开连接的时候（数据库连接成功的时候）
    mongoose.connection.on("open", () => {
        console.log("*************************mongodb数据库连接成功**************************");
    })


};

