/**
 * Created by yanyue on 2020/4/24 16:45
 * User用户表
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

//创建UserSchema
const userSchema = new Schema({
    //用户id
    userId: ObjectId,
    //用户名
    userName: {
        unique: true,
        type: String,
    },
    //用户密码
    password: String,
    //创建时间
    createDate: {type: Date, default: Date.now()},
    //最后登录时间
    lastLoginDate: {type: Date, default: Date.now()},
});

//发布模型
mongoose.model("User", userSchema);




