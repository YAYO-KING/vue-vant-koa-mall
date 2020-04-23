<template>
    <div class='Goods'>
        <div class="goods-image">
            <img v-lazy="goodsImage" width="90%" alt="">
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice|moneyFilter}}}</div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/23 18:17
     * 商品组件
     */

    export default {
        name: "Goods",
        props: ["goodsImage", "goodsName", "goodsPrice"],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>
    .Goods {
        .goods-name {
            padding: 0 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    }
</style>
