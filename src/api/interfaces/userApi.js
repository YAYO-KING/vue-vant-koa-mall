/**
 * Created by yanyue on 2019-09-18 17:10
 * 主页的接口请求
 */
import Http from '@/api/config/http.js';

const post = Http.post;
const get = Http.get;

const userApi = {
    register(params) {
        //return post('/user/register', params, {loading: true})
        return post('/user/register', params)
    },


};

export default userApi;
