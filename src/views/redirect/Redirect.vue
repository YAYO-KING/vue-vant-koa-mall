<script>
    //重定向组件：只是实现路由跳转的功能
    export default {
        created() {
            const {params, query} = this.$route;
            const {path} = params; //获取path参数和query参数，然后进行跳转
            this.$router.replace({path: '/' + path, query})
        },
        render: function (h) {
            return h() // avoid warning message
        }
    }
</script>
