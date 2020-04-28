<template>
    <div class='GoodsDetail'>
        GoodsDetail
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
                goodsId: "0032862950ca44d397e58a6fb10a3e38",
                goodsDetail:null,
            }
        },
        mounted(){
            let vm = this;
            vm.$api.getGoodsDetail({goodsId:vm.goodsId}).then(res=>{
                vm.goodsDetail = res.data;
            })
        },
        methods: {

        }
    }
</script>

<style lang='scss' scoped>
    .GoodsDetail {

    }
</style>
