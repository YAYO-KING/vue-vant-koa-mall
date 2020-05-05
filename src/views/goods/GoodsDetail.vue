<template>
    <div class='GoodsDetail' v-if="goodsDetail">
        <div class="navbar-box">
            <van-nav-bar title="商品详情" left-text="返回" left-arrow
                         @click-left="$router.go(-1)"></van-nav-bar>
        </div>
        <div class="top-img-box">
            <img v-lazy="goodsDetail.IMAGE1" width="100%" alt="">
        </div>
        <div class="goods-name">{{goodsDetail.NAME}}</div>
        <div class="goods-price">价格：{{goodsDetail.PRESENT_PRICE|moneyFilter}}元</div>
        <div>
            <van-tabs swipeable sticky>
                <!--swipeable 实现tab的滑动切换
                sticky 开启吸顶效果 当Tab滚动到顶部时会自动吸顶
                -->
                <van-tab title="商品详情">
                    <div class="detail" v-html="goodsDetail.DETAIL"></div>
                </van-tab>
                <van-tab title="评价">
                    正在制作中
                </van-tab>
            </van-tabs>
        </div>
        <div class="goods-bottom">
            <div>
                <van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
            </div>
            <div>
                <van-button size="large" type="danger">直接购买</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/28 20:25
     * 商品详情页面
     */

    export default {
        name: "GoodsDetail",
        data() {
            return {
                goodsDetail: null,
            }
        },
        mounted() {
            let vm = this;
            vm.$api.getGoodsDetail({goodsId: vm.$route.query.goodsId}).then(res => {
                vm.goodsDetail = res.data;
            })
        },
        methods: {
            //添加商品到购物车
            addGoodsToCart() {
                let vm = this;
                vm.$store.dispatch("good/set_cartInfo", vm.goodsDetail);
                vm.$toast.success("添加成功");
            }
        }
    }
</script>

<style lang='scss' scoped>
    .GoodsDetail {
        .detail {
            //我们写入商品详细信息后，你会发现图片之间是有空隙的，并不能完美的相连。
            //这是因为我们每个图片后边是有空格的，而图片占了宽的100%，所以空格被单独挤出了一行
            //解决方法很简单，只要把字体设置为0就好
            font-size: 0;
        }

        .goods-name {
            background-color: #fff;
        }

        .goods-price {
            background-color: #fff;
        }

        .goods-bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #FFF;
            width: 100%;

            display: flex;
            flex-direction: row;
            flex-flow: nowrap;
        }

        .goods-bottom > div {
            flex: 1;
            padding: 5px;
        }
    }
</style>
