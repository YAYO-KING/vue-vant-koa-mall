/**
 * Created by yanyue on 2019-09-18 17:10
 * 主页的接口请求
 */
import Http from '@/api/config/http.js';

const post = Http.post;
const get = Http.get;

const homeApi = {
    getHomeData(params) {
        return get('/index', params)
    },


};

export default homeApi;
