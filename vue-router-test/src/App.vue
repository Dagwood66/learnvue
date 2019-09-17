<template>
    <div id="app">
        <router-link to="/">首页</router-link>
        <div>
            <router-link to="/user/">动态路由匹配1(匹配不到)</router-link>
            <router-link to="/user/1">动态路由匹配2</router-link>
            <router-link to="/user/2">动态路由匹配3</router-link>
        </div>
        <div>
            <router-link to="/user/1/profile">嵌套路由1</router-link>
            <router-link to="/user/1/posts">嵌套路由2</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>
