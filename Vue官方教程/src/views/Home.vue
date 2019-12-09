<template>
    <ol>
        <li v-for="(item,index) in menuList" v-if="item.meta && !item.meta.menuHidden" :key="index" @click="go(item)">
            {{item.meta.title}}
        </li>
    </ol>
</template>

<script>
    import {constRoutes} from "../router"

    export default {
        data() {
            return {
                menuList: constRoutes
            }
        },
        methods: {
            go(item) {
                this.$router.push({
                    path: item.path
                })
            }
        }
    }
</script>

<style scoped>

</style>
