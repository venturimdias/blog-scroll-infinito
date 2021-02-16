# Blog ApiKi - scroll infinito

Created with CodeSandbox

Usado neste projeto:

- [vue-router](https://router.vuejs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [vue-observe-visibility](https://www.npmjs.com/package/vue-observe-visibility)

#### pages:

- Home
- Blog (Detalhe do post)
- Desenvolvedor
- Contato

#### components:

- topo (logo + menu)
- btn (Botão com propiedade de texto e url)
- posts:
  - lista
  - card
  - detalhe
  - autor

#### router/index.js

```
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

export default router;
```
