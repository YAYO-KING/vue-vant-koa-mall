/**
 * Created by yanyue on 2020/4/24 16:45
 * User用户表
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const bcrypt = require("bcrypt");
//加盐参数
const SALT_WORK_FACTOR = 10;

//创建UserSchema
const userSchema = new Schema({
    //用户id
    userId: ObjectId,
    //用户名
    username: {
        unique: true,
        type: String,
    },
    //用户密码
    password: String,
    //创建时间
    createDate: {type: Date, default: Date.now()},
    //最后登录时间
    lastLoginDate: {type: Date, default: Date.now()},
}, {
    collection: "user"  //避免创建的表名变为users
});

//每次保存的时候都会执行
userSchema.pre("save", function (next) {  //这边一定要写function，不然下面的this.password会找不到上面的password数据
    //加盐   SALT_WORK_FACTOR加盐等级
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) next(err);
        //加盐加密
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            this.password = hash;
            next();
        })
    })
});

userSchema.methods = {
    //用户密码的比对
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) {
                    resolve(isMatch);
                } else {
                    reject(reject);
                }
            });
        })
    }
};


//发布模型
mongoose.model("User", userSchema);
