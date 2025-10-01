import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: "/",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/projects",
        component: () => import("@/views/Projects.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;