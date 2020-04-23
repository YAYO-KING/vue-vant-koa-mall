<template>
    <div class='Floor'>
        <!--不规则的,floor1数组中的前三个是不规则的-->
        <div class="un-normal">
            <div class="floor-one">
                <img :src="floor1[0].image" width="100%">
            </div>
            <div>
                <div class="floor-two">
                    <img :src="floor1[1].image" width="100%">
                </div>
                <div>
                    <img :src="floor1[2].image" width="100%">
                </div>
            </div>
        </div>
        <!--规则的-->
        <div class="normal">
            <!--slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分-->
            <div v-for="(item,index) in floor1.slice(3)" :key="index">
                <img :src="item.image" alt="" width="100%">
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/23 16:29
     * 将楼层显示商品抽出来做成单独的组件
     * 并且使用watch去监听数据的变化
     */

    export default {
        name: "Floor",
        props: {
            floor1: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        methods: {},
        watch:{
            //监视器，监听floor1数据的变化
            floor1(newVal,oldVal){
                console.log(newVal);
            }
        },
    }
</script>

<style lang='scss' scoped>
    .Floor {
        .un-normal {
            display: flex;
            flex-direction: row;
            background-color: #fff;
            border-bottom: 1px solid #ccc;

            div {
                width: 3.75rem;
                box-sizing: border-box;
            }

            .floor-one {
                border-right: 1px solid #ccc;
            }

            .floor-two {
                border-bottom: 1px solid #ccc;
            }
        }

        .normal {
            display: flex;
            flex-direction: row;
            background-color: #fff;
            flex-wrap: wrap;

            div {
                width: 3.75rem;
                border-bottom: 1px solid #ccc;
                box-sizing: border-box;
                /*奇数下标的子元素*/
                &:nth-child(odd) {
                    border-right: 1px solid #ccc;
                }
            }
        }
    }
</style>
