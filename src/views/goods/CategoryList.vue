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
                                content {{ index }}
                            </van-tab>
                        </van-tabs>
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
                active: 0
            }
        },
        created() {
            let vm = this;
            vm.$api.getCategoryList().then(res => {
                vm.categoryList = res.data;
                vm.$api.getCategorySubList({categoryId:vm.categoryList[0].ID}).then(res => {
                    vm.categorySubList = res.data;
                })
            })
        },
        methods: {
            handleClickCategory(index, categoryId) {
                let vm = this;
                vm.activeIndex = index;
                vm.getCategorySubByCategoryId(categoryId);
                vm.active = 0;
            },
            // 根据大类获取小类的类别列表
            getCategorySubByCategoryId(categoryId) {
                let vm = this;
                vm.$api.getCategorySubList({categoryId}).then(res => {
                    vm.categorySubList = res.data;
                })
            }
        }
    }
</script>

<style lang='scss' scoped>
    .CategoryList {
        /*height: 100vh;*/

        .left-box {
            background-color: aliceblue;
            height: calc(100vh - 46px);

            ul li {
                line-height: 0.5rem;
                border-bottom: 1px solid #E4E7ED;
                padding: 3px;
                font-size: 0.3rem;
                text-align: center;

                &.active {
                    background-color: #fff;
                }
            }
        }
    }
</style>
