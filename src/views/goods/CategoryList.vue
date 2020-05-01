<template>
    <div class='CategoryList'>
        <div class="navbar-box">
            <van-nav-bar title="类别列表"></van-nav-bar>
        </div>

        <div>
            <van-row>
                <van-col span="6">
                    <div class="left-box">
                        <!--大类-->
                        <ul>
                            <li v-for="(item,index) in categoryList" :key="index"
                                :class="{active:index === activeIndex}"
                                @click="handleClickCategory(index,item.ID)"
                            >
                                {{item.MALL_CATEGORY_NAME}}
                            </li>
                        </ul>
                    </div>
                </van-col>
                <van-col span="18">
                    <div class="right-box">
                        <!--小类-->
                        <van-tabs v-model="active" @click="onClickCategorySub">
                            <van-tab v-for="(item,index) in categorySubList" :key="index"
                                     :title="item.MALL_SUB_NAME">
                            </van-tab>
                        </van-tabs>
                    </div>

                    <div class="list-box">
                        <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
                            <van-list v-model="loading" :finished="finished" @load="onLoad">
                                <div class="list-item" v-for="(item,index) in goodList" :key="index"
                                     @click="goGoodsInfo(item.ID)">
                                    <div class="list-item-img">
                                        <!--onerror 图片失效-->
                                        <img :src="item.IMAGE1" :onerror="errorImg" width="100%"/>
                                    </div>
                                    <div class="list-item-text">
                                        <div>{{item.NAME}}</div>
                                        <div class="">￥{{item.ORI_PRICE|moneyFilter}}</div>
                                    </div>
                                </div>
                            </van-list>
                        </van-pull-refresh>
                    </div>

                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/5/1 10:59
     */

    export default {
        name: "CategoryList",
        data() {
            return {
                categoryList: [],
                //左侧激活的下标
                activeIndex: 0,
                categorySubList: [],
                //右侧激活的下标
                active: 0,
                loading: false,
                finished: false, //上拉加载是否有数据
                isRefresh: false, //下拉加载
                page: 1,          //商品列表的页数
                goodList: [],     //商品信息
                categorySubId: '', //商品子分类ID
                errorImg: 'this.src="' + require('@/assets/images/errorimg.png') + '"', //失效图片
            }
        },
        created() {
            let vm = this;
            vm.$api.getCategoryList().then(res => {
                vm.categoryList = res.data;
                vm.$api.getCategorySubList({categoryId: vm.categoryList[0].ID}).then(res => {
                    vm.categorySubList = res.data;
                })
            })
        },
        mounted() {
            //计算左侧导航栏的高度
            let winHeight = document.documentElement.clientHeight;
            document.getElementsByClassName("left-box")[0].style.height = winHeight - 46 + "px";
            document.getElementsByClassName("list-box")[0].style.height = winHeight - 90 + "px";
        },
        methods: {
            //点击大类的方法
            handleClickCategory(index, categoryId) {
                let vm = this;
                vm.page = 1;
                vm.finished = false;
                vm.goodList = [];
                vm.activeIndex = index;
                vm.getCategorySubByCategoryId(categoryId);
            },
            // 根据大类获取小类的类别列表
            getCategorySubByCategoryId(categoryId) {
                let vm = this;
                vm.$api.getCategorySubList({categoryId}).then(res => {
                    vm.active = 0;
                    vm.categorySubList = res.data;
                    vm.categorySubId = vm.categorySubList[0].ID;
                    vm.onLoad();
                })
            },
            // 上拉加载方法
            onLoad() {
                let vm = this;
                setTimeout(() => {
                    vm.categorySubId = vm.categorySubId ? vm.categorySubId : vm.categorySubList[0].ID;
                    //加载更多的数据
                    vm.getGoodList();
                }, 1000);
            },
            //重新加载数据
            onRefresh() {
                let vm = this;
                setTimeout(() => {
                    vm.isRefresh = false;
                    vm.finished = false;
                    vm.goodList = [];
                    vm.page = 1;
                    vm.onLoad()
                }, 500);
            },
            //商品列表数据获取
            getGoodList() {
                let vm = this;
                vm.$api.getGoodsBySubId({
                    categorySubId: vm.categorySubId,
                    page: vm.page
                }).then(res => {
                    if (res.data && res.data.length) {
                        vm.page++;
                        vm.goodList = vm.goodList.concat(res.data)
                    } else {
                        vm.finished = true;
                    }
                    vm.loading = false;
                })
            },
            //点击获取子类商品信息的方法
            onClickCategorySub(index) {
                let vm = this;
                vm.categorySubId = vm.categorySubList[index].ID;
                vm.goodList = [];
                vm.finished = false;
                vm.page = 1;
                vm.onLoad()
            },
            //跳转到商品详情页面
            goGoodsInfo(id) {
                let vm = this;
                //vm.$router.push({name: "GoodsDetail", query: {goodsId: id}})
                vm.$router.push({path: "/goodsDetail", query: {goodsId: id}})
                //vm.$router.push({name: "GoodsDetail", params: {goodsId: id}})
            },
        }
    }
</script>

<style lang='scss' scoped>
    .CategoryList {
        /*height: 100vh;*/

        .left-box {
            background-color: aliceblue;
            /*height: calc(100vh - 46px);*/

            ul li {
                /*line-height: 0.78rem;*/
                line-height: 38px;
                border-bottom: 1px solid #E4E7ED;
                padding: 3px;
                font-size: 0.3rem;
                text-align: center;

                &.active {
                    background-color: #fff;
                }
            }
        }

        .list-box {
            overflow: scroll;

            .list-item {
                display: flex;
                flex-direction: row;
                font-size: 0.3rem;
                border-bottom: 1px solid #f0f0f0;
                background-color: #fff;
                padding: 5px;

                .list-item-img {
                    flex: 8;
                }

                .list-item-text {
                    flex: 16;
                    margin-top: 10px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
