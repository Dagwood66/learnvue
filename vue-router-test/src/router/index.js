import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/:id',
            name: 'User',
            component: () => import("../pages/User.vue"),
            children: [{
                path: 'profile',
                component: () => import("../pages/UserPosts.vue"),
            }, {
                path: 'posts',
                component: () => import("../pages/UserProfile.vue"),
            }]
        },
        { // 重复路由测试
            path: "/repeat",
            component: () => import("../pages/Repeat.vue")
        }
    ]
})
