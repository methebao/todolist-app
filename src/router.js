import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Main from "./views/Main.vue";
Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Main },
    { path: "/login", component: Login },
    { path: "*", redirect: "/" }
  ]
});
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const loggedIn = localStorage.getItem("token");
  if (from.path !== "/login") {
    next();
  }
  if (!loggedIn) {
    return next({
      path: "/login",
      query: { returnUrl: to.path }
    });
  }

  next();
});
export default router;
