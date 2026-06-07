import { lenis } from "@/lib/lenis";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    name: "homeView",
    component: () => import("@/layouts/MainLayouts.vue"),
    children: [
      {
        path: "/projects",
        name: "projectsView",
        component: () => import("@/views/ProjectsView.vue"),
      },
      {
        path: "/certifications",
        name: "certificationsView",
        component: () => import("@/views/CertificationsView.vue"),
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "homeView",
  //   component: () => import("@/views/HomeView.vue"),
  // },
  // {
  //   path: "/projects",
  //   name: "projectsView",
  //   component: () => import("@/views/ProjectsView.vue"),
  // },
  // {
  //   path: "/certifications",
  //   name: "certificationsView",
  //   component: () => import("@/views/CertificationsView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    requestAnimationFrame(() => {
      lenis.scrollTo(0, {
        immediate: true,
      });
    });

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

// router.afterEach(() => {
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//     console.log("afterEach", window.scrollY);
//   }, 100);
// });
export default router;
