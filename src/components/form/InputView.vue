<template>
    <div class='InputView'>
        <!--输入框-->
        <van-field
                v-if="'input'===type|| 'password'===type"
                :type="type"
                :name="name"
                :label="label"
                v-model="viewValue"
                :placeholder="placeholder"
                :clearable="clearable"
                :disabled="disabled"
                :rules="rules"
        ></van-field>


    </div>
</template>

<script>
    export default {
        name: "InputView",
        props: {
            //表单控件的类型
            type: {
                type: String,
                default: "input"
            },
            //表单控件的值value
            value: {
                default: ""
            },
            placeholder: {
                type: String,
                default: "请输入"
            },
            clearable: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: null
            },
            rules: {
                type: Array,
                default: null
            },
            label: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                viewValue: "",
            }
        },
        mounted() {
            this.viewValue = this.value;
        },
        methods: {
            isTrue(o) {  //是否是true
                return !this.isFalse(o)
            },
            isFalse(o) {  //是否是false
                if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true;
                return false
            },
        },
        watch: {
            viewValue(newVal) {
                if (this.isTrue(newVal)) {
                    this.$emit("update:value", newVal);
                } else {
                    //如果值是0的话，也会是false，但是有时候数据本身就是0，这是需要的
                    if (newVal === 0) {
                        this.$emit("update:value", 0);
                    } else {
                        this.$emit("update:value", "");
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .InputView {

    }
</style>
