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

        <!--推荐的商品-->
        <div class="recommend-box">
            <div class="recommend-title">商品推荐</div>
            <div class="recommend-body">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(recmmend,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img v-lazy="recmmend.image" width="80%" alt="">
                            <div>{{recmmend.goodsName}}</div>
                            <div>￥{{recmmend.price | moneyFilter}}(￥{{recmmend.mallPrice | moneyFilter}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <!--商品楼层-->
        <div class="floor-box" v-for="(floor,index) in floorList" :key="index" v-if="floorList && floorList.length">
            <div class="floor-title">{{floor.name}}</div>
            <!--<Floor :floor1="floor1"></Floor>-->
            <!--不规则的,floor1数组中的前三个是不规则的-->
            <div class="un-normal">
                <div class="floor-one">
                    <img :src="floor.floors[0].image" width="100%">
                </div>
                <div>
                    <div class="floor-two">
                        <img :src="floor.floors[1].image" width="100%">
                    </div>
                    <div>
                        <img :src="floor.floors[2].image" width="100%">
                    </div>
                </div>
            </div>
            <!--规则的-->
            <div class="normal">
                <!--slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分-->
                <div v-for="(item,index) in floor.floors.slice(3)" :key="index">
                    <img :src="item.image" alt="" width="100%">
                </div>
            </div>
        </div>

        <!--热卖模块-->
        <div class="hot-box">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                            <Goods
                                    :goodsImage="item.image"
                                    :goodsName="item.name"
                                    :goodsPrice="item.price"
                            ></Goods>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>


    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/20 16:06
     */
    //导入vue-awesome-swiper的使用，在单独的组件中使用
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import Goods from "./components/Goods"

    //import Floor from "./components/Floor";


    export default {
        name: "Home",
        components: {swiper, swiperSlide, Goods},
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 3
                },
                swipeImages: [
                    {imageUrl: require("@/assets/images/advertisement/advertise1.jpg")},
                    {imageUrl: require("@/assets/images/advertisement/advertise2.jpg")},
                    {imageUrl: require("@/assets/images/advertisement/advertise3.jpg")}
                ],
                categoryList: [],
                advertiseBanner: "",
                recommendGoods: [],
                //商品的楼层数据
                floorList: [],
                floorNameList: {},
                hotGoods: [],//热卖商品

            }
        },
        created() {
            let vm = this;
            vm.$api.getHomeData().then(res => {
                vm.categoryList = res.data.category;
                vm.advertiseBanner = res.data.advertesPicture.PICTURE_ADDRESS;
                vm.recommendGoods = res.data.recommend;
                vm.floorNameList = res.data.floorName;
                vm.hotGoods = res.data.hotGoods;
                //vm.floor1 = res.data.floor1;
                for (let key in vm.floorNameList) {
                    vm.floorList.push({
                        name: vm.floorNameList[key],
                        floors: res.data[key]
                    })
                }
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
            height: 1.6rem;
            background-color: #fff;
            margin: 0.1rem 0.3rem;
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

        .recommend-box {
            margin-top: 0.1rem;
            background-color: #fff;

            .recommend-title {
                border-bottom: 1px solid #eee;
                font-size: 14px;
                padding: 0.1rem;
                color: $backGroundColor;
            }

            .recommend-body {
                border-bottom: 1px solid #eee;

                .recommend-item {
                    width: 99%;
                    border-right: 1px solid #eee;
                    font-size: 12px;
                    text-align: center;
                }
            }

        }

        .floor-box {

            .floor-title {
                text-align: center;
                font-size: 14px;
                height: 0.5rem;
                line-height: 0.5rem;
                background-color: #eee;
            }

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

        .hot-box {
            .hot-title {
                height: 0.5rem;
                line-height: 0.5rem;
                background-color: #eee;
            }

            text-align: center;
            font-size: 14px;
            /*height: 3rem;*/
            /*line-height: 3rem;*/
        }
    }
</style>
