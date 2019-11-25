<template>
    <div>
        <button @click="go">跳转当前路由</button>
        <button @click="reload">刷新</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this.mounted();
        },
        watch: {
            // 监听当前路由手动调起mounted
            $route() {
                this.mounted();
            }
        },
        methods: {
            mounted() {
                console.log("mounted");
            },
            go() {
                // 相同路由不同参数的情况下,组件不会重复初始化
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        ...this.$route.query,
                        _: new Date().getTime()
                    }
                });
            },
            reload() {
                // 页面刷新-会导致页面闪烁空白(页面重新加载)
                // 方式1
                //  this.$router.go(0);
                // 方式2
                window.location.reload();
            }
        }
    }
</script>