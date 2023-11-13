import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/components/views/AboutMe.vue"),
    },
    {
      path: "/gallery/:category",
      name: "gallery",
      component: () => import("@/components/views/GalleryView.vue"),
    },
  ],
});

export default router;
