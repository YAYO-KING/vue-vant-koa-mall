<template>
    <div class='Goods' @click="gotoGoodsDetail">
        <div class="goods-image">
            <img v-lazy="goodsImage" width="90%" alt="">
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice|moneyFilter}}</div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/23 18:17
     * 商品组件
     */

    export default {
        name: "Goods",
        props: ["goodsImage", "goodsName", "goodsPrice", "goodsId"],
        data() {
            return {}
        },
        methods: {
            gotoGoodsDetail() {
                let vm = this;
                vm.$router.push({path: "/goodsDetail", query: {goodsId: vm.goodsId}})
            }
        }
    }
</script>

<style lang='scss' scoped>
    .Goods {
        padding: 10px;

        .goods-name {
            padding: 0 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    }
</style>
