<template>
  <div class="card">
    <a :id="post.id" @click="formatarLInk">
      <img :src="post._embedded['wp:featuredmedia'][0].source_url" />

      <h3 v-html="post.title.rendered"></h3>

      <div v-html="post.excerpt.rendered"></div>
      <div class="btn-leia">leia mais</div>
    </a>
  </div>
</template>
  
<script>
export default {
  props: ["post"],
  methods: {
    formatarLInk() {
      //aqui estou montando o link com o slug
      this.$router.replace({ path: `/blog/categoria/${this.post.slug}` });
    },
  },
};
</script>
<style scoped>
a {
  cursor: pointer;
  display: block;
  line-height: 140%;
}
img {
  width: 100%;
  height: auto;
}
h3 {
  font-size: 1.4rem;
  color: var(--cor2);
  margin-bottom: 20px;
}

a .btn-leia {
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 0.7rem;
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid var(--cor2);
  transition: all 0.2s;
}
a:hover .btn-leia {
  border-color: var(--cor4);
  background: var(--cor4);
  color: var(--cor2);
}
</style>
