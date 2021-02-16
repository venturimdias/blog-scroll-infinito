import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import Desenvolvedor from "@/pages/Desenvolvedor";
import Contato from "@/pages/Contato";
import Blog from "@/pages/Blog";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/desenvolvedor", component: Desenvolvedor },
  { path: "/contato", component: Contato },
  { path: "/blog/:cat/:slug/", component: Blog, meta: "slug" }
];

const router = new Router({ routes });
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

export default router;
