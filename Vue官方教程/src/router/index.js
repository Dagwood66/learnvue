import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../pages/Home.vue"),
        meta: {
            title: "首页",
            menuHidden: true
        }
    },
    {
        path: '/slot',
        component: () => import("../pages/Slot.vue"),
        meta: {
            title: "插槽内容",
        }
    },
    {
        path: '/slotCompilationScope',
        component: () => import("../pages/SlotCompilationScope.vue"),
        meta: {
            title: "编译作用域",
        }
    },
    {
        path: '/slotFallbackContent',
        component: () => import("../pages/SlotFallbackContent.vue"),
        meta: {
            title: "后备内容",
        }
    },
];

export const constRoutes = routes;

export default new Router({
    routes: routes
})
