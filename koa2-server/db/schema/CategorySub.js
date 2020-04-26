/**
 * Created by yanyue on 2020/4/26 23:24
 */
const mongoose = require('mongoose');   //引入Mongoose
const Schema = mongoose.Schema;  //声明Schema

const categorySubSchema = new Schema({
    ID: {unique: true, type: String},
    MALL_CATEGORY_ID: {type: String},
    MALL_SUB_NAME: {type: String},
    COMMENTS: {type: String},
    SORT: {type: Number}
}, {
    collection: 'categorySub'
});

mongoose.model('CategorySub', categorySubSchema);
