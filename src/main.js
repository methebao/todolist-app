import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AuthService from "./api/auth";

// Check the users auth status when the app starts
let authService = new AuthService();
authService.checkAuth();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
