const { createRouter, createWebHistory } = require("vue-router")


const routes = [
    {
        path: '/',
        name:'home',
        component: () => import("@/pages/HomePage.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})