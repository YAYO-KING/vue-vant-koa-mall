<template>
    <div class='Home'>
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
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/20 16:06
     */

    export default {
        name: "Home",
        data() {
            return {}
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
    }
</style>
