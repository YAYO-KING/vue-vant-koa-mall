/**
 * Created by yanyue on 2020/5/4 10:59
 */
import util from "@/common/js/util"

const good = {
    namespaced: true,
    state: {
        cartInfo: []
    },
    mutations: {
        SET_CARTINFO(state, payload) {
            state.cartInfo = payload;
        }
    },
    actions: {
        set_cartInfo({commit, state}, cart) {
            if (state.cartInfo.length === 0) {
                state.cartInfo.push({...cart, count: 1});
                commit('SET_CARTINFO', state.cartInfo);
            } else {
                let index = util.ArrayFn.containsObjArr(state.cartInfo, cart.ID, "ID");
                if (index === null) {
                    //购物车中不存在该商品
                    state.cartInfo.push({...cart, count: 1});
                    commit('SET_CARTINFO', state.cartInfo);
                } else {
                    //购物车中已经存在该商品
                    state.cartInfo[index].count++;
                    commit('SET_CARTINFO', state.cartInfo);
                }
            }
        },
        clear_cartInfo({commit}, cart) {
            commit('SET_CARTINFO', []);
        }
    },
    getters: {}
};

export default good;
