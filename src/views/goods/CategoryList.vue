<template>
    <div class='CategoryList'>
        <div class="navbar-box">
            <van-nav-bar title="类别列表"></van-nav-bar>
        </div>

        <div>
            <van-row>
                <van-col span="6">
                    <div class="left-box">
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
                        <van-tabs v-model="active">
                            <van-tab v-for="(item,index) in categorySubList" :key="index"
                                     :title="item.MALL_SUB_NAME">
                            </van-tab>
                        </van-tabs>
                    </div>

                    <div class="list-box">
                        <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
                            <van-list v-model="loading" :finished="finished" @load="onLoad">
                                <div class="list-item" v-for="item in list" :key="item">
                                    {{item}}
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
                list: [], //商品数据
                isRefresh: false, //下拉加载
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
            handleClickCategory(index, categoryId) {
                let vm = this;
                vm.activeIndex = index;
                vm.getCategorySubByCategoryId(categoryId);
            },
            // 根据大类获取小类的类别列表
            getCategorySubByCategoryId(categoryId) {
                let vm = this;
                vm.$api.getCategorySubList({categoryId}).then(res => {
                    vm.active = 0;
                    vm.categorySubList = res.data;
                })
            },
            // 上拉加载方法
            onLoad() {
                let vm = this;
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        vm.list.push(vm.list.length + 1);
                    }
                    vm.loading = false;
                    if (vm.list.length >= 40) {
                        vm.finished = true;
                    }

                }, 500);
            },
            //重新加载数据
            onRefresh() {
                let vm = this;
                setTimeout(() => {
                    vm.isRefresh = false;
                    vm.list = [];
                    vm.onLoad()
                }, 500);
            }
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
                text-align: center;
                line-height: 80px;
                border-bottom: 1px solid #f0f0f0;
                background-color: #fff;
            }
        }
    }
</style>
