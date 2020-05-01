/**
 * Created by yanyue on 2020/4/28 20:40
 */
import Http from '@/api/config/http.js';

const post = Http.post;
const get = Http.get;

const goodsApi = {
    getGoodsDetail(params) {
        return get('/good/getGoodsDetail',params)
    },
    getCategoryList(params) {
        return get('/good/getCategoryList',params)
    },


};

export default goodsApi;
