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
    //重新连接的次数
    let maxConnectTimes = 0;

    //返回一个promise，数据库正常连接的时候才会继续往下执行，如果不正常连接，是不会继续执行的
    return new Promise((resolve, reject) => {
        //增加数据库的监听事件
        //当数据库断开的时候
        mongoose.connection.on("disconnected", () => {
            console.log("*************************数据库断开**************************");
            if (maxConnectTimes <= 3) {
                maxConnectTimes++;
                mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
            } else {
                reject();
                throw new Error("数据库出现异常，程序无法搞定，请人为修理...")
            }

        });

        //当数据库发生错误的时候
        mongoose.connection.on("error", (err) => {
            console.log("*************************数据库错误**************************");
            if (maxConnectTimes <= 3) {
                maxConnectTimes++;
                mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
            } else {
                reject(err);
                throw new Error("数据库出现异常，程序无法搞定，请人为修理...")
            }
        });

        //数据库打开连接的时候（数据库连接成功的时候）
        mongoose.connection.on("open", () => {
            console.log("*************************mongodb数据库连接成功**************************");
            resolve();
        })
    });


};

