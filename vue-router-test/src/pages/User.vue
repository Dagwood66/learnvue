<template>
    <div>
        {{$route.params}}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log("mounted:" + JSON.stringify(this.$route.params));
        },
        beforeRouteUpdate(to, from, next) { // 路由复用
            console.log("beforeRouteUpdate:" + JSON.stringify(this.$route.params));
            next();
        },
        watch: {
            "$route": function (to, from) { // 路由复用
                console.log("watch:" + JSON.stringify(this.$route.params));
            }
        }
    }
</script>