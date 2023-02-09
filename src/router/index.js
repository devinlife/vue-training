import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test-table",
      name: "test-table",
      component: () => import("../views/TestTable.vue"),
    },
    {
      path: "/test-button",
      name: "test-button",
      component: () => import("../views/TestButton.vue"),
    },
    {
      path: "/test-state",
      name: "test-state",
      component: () => import("../views/TestState.vue"),
    },
    {
      path: "/test-collection",
      name: "test-collection",
      component: () => import("../views/TestCollection.vue"),
    },
    {
      path: "/test-family",
      name: "test-family",
      component: () => import("../views/TestFamily.vue"),
    },
  ],
});

export default router;
