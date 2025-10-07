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
    }, 
    {
        path: "/projects/archive",
        component: () => import("@/views/Archives.vue"),
    },
    {
        path: '/projects/:project',
        component: () => import('@/views/projects/ProjectsDetail.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/404.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
});

export default router;