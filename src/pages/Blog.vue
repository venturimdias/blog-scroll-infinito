<template>
  <div class="container">
    <h2>Blog</h2>
    <detalhe
      v-bind:categoria="$route.params.cat"
      v-bind:slug="$route.params.slug"
    />
  </div>
</template>
<script>
import detalhe from "@/components/posts/detalhe.vue";

export default {
  components: {
    detalhe,
  },
};
</script>