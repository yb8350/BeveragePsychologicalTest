import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
  },
  {
    path: "/loading",
    name: "loading",
    component: () => import("@/views/LoadingView.vue"),
  },
  {
    path: "/result/:res",
    name: "result",
    component: () => import("@/views/ResultView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
