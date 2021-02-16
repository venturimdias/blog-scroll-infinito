<template>
  <div id="app">
    <topo />
    <router-view />
  </div>
</template>

<script>
import topo from "@/components/topo";

export default {
  name: "App",
  components: {
    topo,
  },
};
</script>

<style>
:root {
  --branco: #FFF;
  --tipografia: #313131;

  --cor1: #ca3e47;
  --cor2: #263859;
  --cor3: #96C0CE;
  --cor4: #f0db4f;
}
#app {
  font-family: "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
body,
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
body,
a {
  color: var(--tipografia);
}
ul,
li {
  list-style: none;
}
h1 {
  font-size: 3rem;
  color: var(--cor2);
}
h2 {
  font-size: 1.8rem;
  color: var(--cor3);
}

.flex {
  display: flex;
}
.grid {
  display: grid;
}
.container {
  max-width: 1200px;
  width: 95%;
  margin: auto;
}
</style>
