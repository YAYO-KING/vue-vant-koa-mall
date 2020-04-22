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
        <br>
        <!--1.swiper区域滚动效果-->
        <swiper class="swiper-box3" :options="swiperOptions3">
            <swiperSlide class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci alias aliquid animi
                consectetur cupiditate doloremque, error eveniet ex, exercitationem facilis hic maiores modi optio sequi
                tempora unde velit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque beatae dignissimos
                dolores eveniet, explicabo hic impedit ipsam maxime, nesciunt nobis, officiis optio quis reprehenderit
                sequi suscipit tenetur veniam? Quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem excepturi facere ipsum modi, nihil officia saepe tempora unde? Eveniet exercitationem ipsam
                ipsum libero nemo quisquam rerum, suscipit vel! Commodi, quis! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Beatae commodi deserunt doloribus eos, est fugiat obcaecati optio rem suscipit veniam!
                Amet deserunt doloremque esse, eveniet facilis officia sint sunt vel! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cupiditate doloribus ducimus error hic id ipsum nam nesciunt officia quia,
                recusandae, voluptas voluptatibus. Aliquid deserunt eaque itaque non nostrum quaerat sint?Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Ab alias aperiam aut deserunt earum eos esse fugiat, illo
                laborum nesciunt porro quo repellat, rerum saepe sit soluta unde. Aut, expedita. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Assumenda, dolor dolore excepturi impedit inventore nesciunt nobis
                recusandae repellendus repudiandae saepe? Inventore molestias officia praesentium quidem repudiandae
                temporibus tenetur vitae? Assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                iure, perspiciatis. Cumque dolores impedit incidunt iste molestiae nesciunt, officiis praesentium
                suscipit? Consequuntur dolore doloribus eligendi itaque iusto laborum numquam veritatis.
            </swiperSlide>
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
                    //3.无限循环滚动--也就是滑动到最后一个item的时候，后面接着的就是之前的第一个item
                    loop: true,
                    //分页
                    pagination: {
                        el: ".swiper-pagination",
                        //2.swiper分页器可以自由选择
                        clickable: true,
                    }
                },
                swiperOptions2: {
                    //垂直的拖拉
                    direction: "vertical",
                    //分页
                    pagination: {
                        el: ".swiper-pagination",
                        //2.swiper分页器可以自由选择
                        clickable: true,
                    }
                },
                swiperOptions3:{
                    //垂直的拖拉
                    direction: "vertical",
                    //一屏之内显示的swiperSlide的数量
                    slidesPerView: "auto",
                    //自由模式（默认是false，就是每次滑动的时候就滑动一格，设置为true的话，就自由的滑动了，变成滚动的效果了）
                    freeMode: true,
                    //PC端鼠标滚轮生效
                    mousewheel: true,
                }
            }
        },
        methods: {}
    }
</script>

<style lang='scss' scoped>
    .SwiperDefault {
        .swiper-box {
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

        .swiper-box3{
            height: 5rem;
            background-color: #ff7900;
            overflow: hidden;

            .text {
                font-size: 18px;
                text-align: left;
                padding: 30px;
                height: auto;
                box-sizing: border-box;
            }
        }
    }
</style>
