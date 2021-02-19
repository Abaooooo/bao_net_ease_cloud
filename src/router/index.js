import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* modules */
import loginRoute from "./loginRoute";

const routes = [...loginRoute];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
