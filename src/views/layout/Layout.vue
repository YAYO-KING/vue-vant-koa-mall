<template>
    <div class='Layout'>
        <div class="main">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="records" to="/categoryList">列表</van-tabbar-item>
            <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/categoryList">会员中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/20 16:04
     */

    export default {
        name: "Layout",
        data() {
            return {
                active: 0
            }
        },
        methods: {
        }
    }
</script>

<style lang='scss' scoped>
    .Layout {

    }
</style>
