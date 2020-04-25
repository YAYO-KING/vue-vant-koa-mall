/**
 * Created by yanyue on 2020/4/25 17:32
 */
const Router = require("koa-router");
const mongoose = require("mongoose");
const router = new Router();
const util = require("../utils/util");

//过滤数据
router.get('/filterGoods', async (ctx) => {
    let pushData = [];
    await util.FileFn.readJSONFile("./json/goods.json").then(result => {
        //过滤出有效的数据
        result.RECORDS.forEach(record => {
            if (record.IMAGE1 != null) {
                pushData.push(record)
            }
        });

    });
    //将有效的数据写入到文件中
    await util.FileFn.writeJSONFile("./json/effectGoods.json",pushData);
    ctx.body = "开始过滤数据";
});

//插入商品数据
router.get('/insertAllGoodsInfo', async (ctx) => {
    const Good = mongoose.model("Good");
    await util.FileFn.readJSONFile("./json/effectGoods.json").then(result => {
        let saveCount = 0;
        result.forEach(record => {
            let newGood = new Good(record);
            newGood.save().then(() => {
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
