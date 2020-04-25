<template>
    <div class='Register'>
        <van-nav-bar title="用户注册" left-text="返回" left-arrow
                     @click-left="goBack"></van-nav-bar>
        <van-form ref="registerForm" :show-error="false">
            <!--
                show-error 是否在校验不通过时标红输入框
                show-error-message 是否在校验不通过时在输入框下方展示错误提示 默认true
            -->
            <div class="register-box">
                <!--表单验证需要写入name-->
                <van-field label="用户名" clearable v-model="userForm.username"
                           name="username"
                           placeholder="请输入用户名"
                           :rules="$rules.NotEmpty"
                ></van-field>
                <van-field label="密码" type="password" clearable v-model="userForm.password"
                           name="password"
                           :rules="$rules.NotEmpty"
                           placeholder="请输入密码"></van-field>

            </div>
            <div class="button-box">
                <van-button type="primary" size="large" @click="handleRegister('registerForm')" :loading="openLoading">
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
        name: "Register",
        data() {
            return {
                userForm: {
                    username: "",
                    password: ""
                },
                openLoading: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            //用户注册
            handleRegister(formName) {
                let vm = this;
                //vm.$refs[formName].validate().then(() => {
                //    vm.openLoading = true;
                //    vm.$api.register(vm.userForm).then(res => {
                //        //vm.$notify.success("注册成功");
                //        vm.$toast.success("注册成功");
                //        vm.openLoading = false;
                //        vm.$router.push("/");
                //    }).catch(() => {
                //        vm.$toast.fail("注册失败");
                //        vm.openLoading = false;
                //    })
                //}).catch(() => {
                //    vm.$notify({
                //        message: '输入有误',
                //        type: 'danger'
                //    });
                //});
                vm.validateRules(formName, vm).then(result => {
                    if (result) {
                        vm.openLoading = true;
                        vm.$api.register(vm.userForm).then(res => {
                            //vm.$notify.success("注册成功");
                            vm.$toast.success("注册成功");
                            vm.openLoading = false;
                            vm.$router.push("/");
                        }).catch(() => {
                            vm.$toast.fail("注册失败");
                            vm.openLoading = false;
                        })
                    }
                });
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
