/**
 * Created by yanyue on 2020/4/25 17:32
 */
const Router = require("koa-router");
const mongoose = require("mongoose");
const router = new Router();
const util = require("../utils/util");

//获取商品详情的接口
router.get('/getGoodsDetail', async (ctx) => {
    //get请求使用query   post请求使用body去获取数据
    let goodsId = ctx.request.query.goodsId;
    const Cood = mongoose.model("Good");
    await Cood.findOne({ID: goodsId}).exec().then(async (result) => {
        console.log(result);
        ctx.body = {
            code: 200,
            data: result,
            message: "请求成功"
        }
    }).catch((error) => {
        ctx.body = {
            code: 500,
            data: error,
            message: "请求失败"
        }
    })
});

//获取商品类别的数据接口
router.get('/getCategoryList', async (ctx) => {
    const Category = mongoose.model("Category");
    await Category.find().exec().then(async (result) => {
        ctx.body = {
            code: 200,
            data: result.RECORDS,
            message: "请求成功"
        }
    }).catch((error) => {
        ctx.body = {
            code: 500,
            data: error,
            message: "请求失败"
        }
    })
});

//获取商品小类别的数据接口
router.get('/getCategorySubList', async (ctx) => {
    let categoryId = ctx.request.query.categoryId;
    const CategorySub = mongoose.model("CategorySub");
    await CategorySub.find({MALL_CATEGORY_ID:categoryId}).exec().then(async (result) => {
        ctx.body = {
            code: 200,
            data: result.RECORDS,
            message: "请求成功"
        }
    }).catch((error) => {
        ctx.body = {
            code: 500,
            data: error,
            message: "请求失败"
        }
    })
});


//获取类别获取商品列表
router.get('/getGoodsListByCategorySubID', async (ctx) => {
    let categorySubId = ctx.request.query.categorySubId;
    const Goods = mongoose.model("Goods");
    await Goods.find({SUB_ID:categorySubId}).exec().then(async (result) => {
        ctx.body = {
            code: 200,
            data: result.RECORDS,
            message: "请求成功"
        }
    }).catch((error) => {
        ctx.body = {
            code: 500,
            data: error,
            message: "请求失败"
        }
    })
});


/**
 * 插入数据进数据库的接口
 *

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


 //插入商品小类的数据
 router.get('/insertCategorySub', async (ctx) => {
    const CategorySub = mongoose.model("CategorySub");
    await util.FileFn.readJSONFile("./json/category_sub.json").then(result => {
        let saveCount = 0;
        result.RECORDS.forEach(record => {
            let newCategorySub = new CategorySub(record);
            newCategorySub.save().then(() => {
                saveCount++;
                console.log("成功" + saveCount);
            }).catch(err => {
                console.log(err);
            })
        })
    });
    ctx.body = "开始导入数据";
});

 */

module.exports = router;
