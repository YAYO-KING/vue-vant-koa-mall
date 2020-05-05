<template>
    <div class='Cart'>
        <div class="navbar-box">
            <van-nav-bar title="购物车"></van-nav-bar>
        </div>
        <div class="cart-title">
            <van-button type="danger" size="mini" @click="clearCart">
                清空购物车
            </van-button>
        </div>
        <!--显示购物车中的商品-->
        <div class="cart-list">
            <div class="cart-row" v-for="(item,index) in cartInfo" :key="item.ID">
                <div class="cart-img">
                    <img :src="item.IMAGE1" width="100%" alt="">
                </div>
                <div class="cart-text">
                    <div class="goods-name">{{item.NAME}}</div>
                    <div class="goods-count">
                        <van-stepper v-model="item.count"/>
                    </div>
                </div>
                <div class="cart-price">
                    <div>￥{{item.PRESENT_PRICE|moneyFilter}}</div>
                    <div>X{{item.count}}</div>
                    <div class="all-price">
                        ￥{{item.PRESENT_PRICE*item.count|moneyFilter}}
                    </div>
                </div>
            </div>
        </div>

        <!--显示总金额-->
        <div class="total-money">
            商品总价:￥{{totalMoney|moneyFilter}}
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/5/4 10:15
     */
    import {mapState} from "vuex";

    export default {
        name: "Cart",
        data() {
            return {}
        },
        created() {
            let vm = this;

        },
        computed: {
            ...mapState({
                cartInfo: state => state.good.cartInfo
            }),
            totalMoney() {
                let vm = this;
                let money = 0;
                vm.cartInfo.forEach(item => {
                    money += item.PRESENT_PRICE * item.count;
                });
                return money;
            }
        },
        methods: {
            //清空购物车
            clearCart() {
                let vm = this;
                vm.$store.dispatch("good/clear_cartInfo");

            }
        }
    }
</script>

<style lang='scss' scoped>
    .Cart {
        .cart-title {
            height: 0.5rem;
            line-height: 0.5rem;
            background-color: #fff;
            border-bottom: 1px solid #E4E7ED;
            padding: 5px;
            text-align: right;
        }

        .cart-list {
            background-color: #fff;

            .cart-row {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                padding: 0.1rem;
                font-size: 0.3rem;
                border-bottom: 1px solid #E4E7ED;

                .cart-img {
                    flex: 6;
                }

                .cart-text {
                    flex: 14;
                    padding-left: 10px;
                }

                .goods-count {
                    padding-top: 10px;
                }

                .cart-price {
                    flex: 4;
                    text-align: right;
                }

                .all-price {
                    color: red;
                }
            }
        }

        .total-money {
            text-align: right;
            background-color: #fff;
            border-bottom: 1px solid #E4E7ED;
            padding: 5px;
        }
    }
</style>
