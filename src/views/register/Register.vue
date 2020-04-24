<template>
    <div class='Register'>
        <van-nav-bar title="用户注册" left-text="返回" left-arrow
                     @click-left="goBack"></van-nav-bar>
        <div class="register-box">
            <van-field label="用户名" clearable required v-model="userForm.username" placeholder="请输入用户名"></van-field>
            <van-field label="密码" type="password" clearable required v-model="userForm.password"
                       placeholder="请输入密码"></van-field>

        </div>
        <div class="button-box">
            <van-button type="primary" size="large" @click="">
                注册
            </van-button>
        </div>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/24 20:55
     */

    export default {
        name: "Register",
        data() {
            return {
                userForm: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .Register {
        background-color: #fff;
        height: 100vh;

        .register-box {
            border-top: 1px solid #eee;
            padding: 10px;
            border-radius: 5px;
        }

        .button-box {
            padding: 10px;
        }
    }
</style>
