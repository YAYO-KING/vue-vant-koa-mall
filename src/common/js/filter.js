/**
 * Created by yanyue on 2020/4/23 17:08
 */
import util from "./util.js";

const moneyFilter = function (val = 0) {
    if (util.TypeFn.isNumber(val)) {
        //值  保留几位：2  小数点符号.  千分位符号,
        return util.NumberFn.numberFormat(val, 2, ".", ",");
    }

};

export {
    moneyFilter,
}
