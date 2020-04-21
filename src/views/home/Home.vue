<template>
    <!--主页-->
    <div class='Home'>

        <!--搜索框区域-->
        <div class="search-box">
            <van-row>
                <van-col span="3" align="center">
                    <i class="position iconfont icon-dingwei"></i>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5" align="center">
                    <van-button type="default" size="small">
                        查找
                    </van-button>
                </van-col>
            </van-row>
        </div>

        <!--轮播图区域-->
        <div class="swiper-box">
            <van-swipe :autoplay="1000">
                <!--
                     autoplay 轮播时间
                -->
                <van-swipe-item v-for="(image,index) in swipeImages" :key="index">
                    <!--因为引入了Lazyload，所以可以使用v-lazy加载显示图片-->
                    <img v-lazy="image.imageUrl" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>

        <!--类别区域-->
        <div class="category-box">
            <div v-for="(category,index) in categoryList" :key="index">
                <img v-lazy="category.image">
                <div>{{category.mallCategoryName}}</div>
            </div>
        </div>

        <!--广告区域-->
        <div class="advertise">
            <img v-lazy="advertiseBanner" alt="" width="100%">
        </div>

    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/20 16:06
     */

    export default {
        name: "Home",
        data() {
            return {
                swipeImages: [
                    {imageUrl: require("@/assets/images/advertisement/advertise1.jpg")},
                    {imageUrl: require("@/assets/images/advertisement/advertise2.jpg")},
                    {imageUrl: require("@/assets/images/advertisement/advertise3.jpg")}
                ],
                categoryList: [],
                advertiseBanner: "",

            }
        },
        mounted() {
            let vm = this;
            vm.$api.getHomeData().then(res => {
                vm.categoryList = res.data.category;
                vm.advertiseBanner = res.data.advertesPicture.PICTURE_ADDRESS;
            })
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>
    $backGroundColor: #e5017d;
    .Home {
        .search-box {
            height: 1rem;
            background: $backGroundColor;
            line-height: 1rem;
            overflow: hidden;

            .position {
                font-size: 25px;
            }

            .search-input {
                width: 100%;
                height: 0.8rem;
                border-top: 0;
                border-right: 0;
                border-bottom: 1px solid #fff;
                border-left: 0;
                background-color: $backGroundColor;
                color: #fff;
            }
        }

        .swiper-box {
            width: 7.5rem;
            height: 3.5rem;
            overflow: hidden;
            clear: both;

            img {
                width: 100%;
                height: 3.5rem;
            }

        }

        .category-box {
            background-color: #fff;
            margin: 0 0.3rem 0.3rem 0.3rem;
            border-radius: 0.3rem;
            font-size: 14px;
            /*flex布局，主轴行，不换行*/
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

            div {
                padding: 0.1rem;
                font-size: 12px;
                text-align: center;

                img {
                    width: 1rem; //50px
                    height: 1rem;
                }
            }
        }
    }
</style>
