<template>
    <div class='Cart'>
        <div class="navbar-box">
            <van-nav-bar title="购物车"></van-nav-bar>
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/5/4 10:15
     */

    export default {
        name: "Cart",
        data() {
            return {
                cartInfo: this.$store.good.cartInfo,

            }
        },
        created() {
            let vm = this;
            vm.getCartInfo();
        },
        computed: {
            isEmpty() {
                let vm = this;
                return !!(vm.cartInfo.length > 0);
            }
        },
        methods: {
            getCartInfo() {
                let vm = this;

            }
        }
    }
</script>

<style lang='scss' scoped>
    .Cart {

    }
</style>
