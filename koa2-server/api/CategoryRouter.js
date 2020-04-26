/**
 * Created by yanyue on 2020/4/26 23:19
 */
const Router = require("koa-router");
const mongoose = require("mongoose");
const router = new Router();
const util = require("../utils/util");


//插入商品大类数据
router.get('/insertCategory', async (ctx) => {
    const Category = mongoose.model("Category");
    await util.FileFn.readJSONFile("./json/category.json").then(result => {
        let saveCount = 0;
        result.RECORDS.forEach(record => {
            let newCategory = new Category(record);
            newCategory.save().then(() => {
                saveCount++;
                console.log("成功" + saveCount);
            }).catch(err => {
                console.log(err);
            })
        })
    });
    ctx.body = "开始导入数据";
});


module.exports = router;
