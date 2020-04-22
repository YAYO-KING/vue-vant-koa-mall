<template>
    <div class='SwiperDefault'>
        <!--普通swiper-->
        <swiper>
            <swiperSlide class="swiper-slider" v-for="(item,index) in slide" :key="index">
                Slide{{item}}
            </swiperSlide>
        </swiper>
        <br>
        <!--添加配置的swiper-->
        <swiper :options="swiperOptions">
            <swiperSlide class="swiper-slider" v-for="(item,index) in slide" :key="index">
                Slide{{item}}
            </swiperSlide>
            <!--添加分页的效果-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <br>
        <!--添加配置的swiper-->
        <swiper class="swiper-box" :options="swiperOptions2">
            <swiperSlide class="swiper-slider" v-for="(item,index) in slide" :key="index">
                Slide{{item}}
            </swiperSlide>
            <!--添加分页的效果-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/22 13:22
     * vue-awesome-swiper的demo
     */
    //导入vue-awesome-swiper的使用，在单独的组件中使用
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "SwiperDefault",
        components: {swiper, swiperSlide},
        data() {
            return {
                slide: [1, 2, 3, 4, 5],
                //swiper的属性配置
                swiperOptions: {
                    //分页
                    pagination: {
                        el: ".swiper-pagination"
                    }
                },
                swiperOptions2: {
                    //垂直的拖拉
                    direction:"vertical",
                    //分页
                    pagination: {
                        el: ".swiper-pagination"
                    }
                }
            }
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>
    .SwiperDefault {
        .swiper-box{
            height: 4rem;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }
        .swiper-slider {
            background-color: #ff7900;
            height: 4rem;
            text-align: center;
            line-height: 4rem;
        }
    }
</style>
