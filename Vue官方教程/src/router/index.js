import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue"),
        meta: {
            title: "首页",
            menuHidden: true
        }
    },
    {
        path: '/slot',
        component: () => import("../views/Slot.vue"),
        meta: {
            title: "插槽内容",
        }
    },
    {
        path: '/slotCompilationScope',
        component: () => import("../views/SlotCompilationScope.vue"),
        meta: {
            title: "编译作用域",
        }
    },
    {
        path: '/slotFallbackContent',
        component: () => import("../views/SlotFallbackContent.vue"),
        meta: {
            title: "后备内容",
        }
    },
    {
        path: '/slotNamedSlots',
        component: () => import("../views/SlotNamedSlots.vue"),
        meta: {
            title: "具名插槽",
        }
    },
    {
        path: '/SlotScopedSlots',
        component: () => import("../views/SlotScopedSlots"),
        meta: {
            title: "作用域插槽",
        }
    },
];

export const constRoutes = routes;

export default new Router({
    routes: routes
})