import Vue from "vue";
import VueRouter from "vue-router";
import { ObserveVisibility } from 'vue-observe-visibility';

import App from "./App.vue";
import router from "@/router";

Vue.directive('observe-visibility', ObserveVisibility)

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
