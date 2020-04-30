<template>
    <div class='Login'>
        <van-nav-bar title="用户登录" left-text="返回" left-arrow
                     @click-left="goBack"></van-nav-bar>
        <van-form ref="loginForm" :show-error="false">
            <!--
                show-error 是否在校验不通过时标红输入框
                show-error-message 是否在校验不通过时在输入框下方展示错误提示 默认true
            -->
            <div class="login-box">
                <!--表单验证需要写入name-->
                <g-input-view type="input" label="用户名" clearable :value.sync="userForm.username"
                              name="username"
                              placeholder="请输入用户名"
                              :rules="$rules.NotEmpty"
                ></g-input-view>
                <g-input-view type="password" label="密码" clearable :value.sync="userForm.password"
                              name="password"
                              :rules="$rules.NotEmpty"
                              placeholder="请输入密码"></g-input-view>

            </div>
            <div class="button-box">
                <van-button type="primary" size="large" @click="handleLogin('loginForm')">
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    /**
     * Created by yanyue on 2020/4/24 20:55
     */

    export default {
        name: "Login",
        data() {
            return {
                userForm: {
                    username: "",
                    password: ""
                },
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            //用户注册
            handleLogin(formName) {
                let vm = this;
                vm.validateRules(formName, vm).then(result => {
                    if (result) {
                        //vm.openLoading = true;
                        //vm.$api.login(vm.userForm).then(res => {
                        //    //vm.$notify.success("注册成功");
                        //    vm.$toast.success("登录成功");
                        //    vm.openLoading = false;
                        //    //vm.$router.push("/");
                        //}).catch(() => {
                        //    vm.$toast.fail("登录失败");
                        //    vm.openLoading = false;
                        //})

                        vm.$store.dispatch("user/login", vm.userForm).then(result => {
                            //vm.$toast.success("登录成功");
                            vm.$notify({message: "登录成功", type: "success"});
                            vm.$router.push("/");
                        }).catch(err => {
                            console.log(err);
                            //vm.$toast.fail("登录失败");
                            vm.$notify({message: "登录失败", type: "danger"});
                        })
                    }
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
    .Login {
        background-color: #fff;
        height: 100vh;

        .login-box {
            border-top: 1px solid #eee;
            padding: 10px;
            border-radius: 5px;
        }

        .button-box {
            padding: 10px;
        }
    }
</style>
