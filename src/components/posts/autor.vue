<template>
  <div class="box-autor">
    <div class="autor container grid">
      <img :src="author.avatar_urls['96']" />
      <div class="desc">
        <h5>Autor</h5>
        <h3>{{ author.name }}</h3>
        <p>{{ author.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["user"],
  data() {
    return {
      author: [],
    };
  },
  mounted() {
    this.getAuthor();
  },
  methods: {
    async getAuthor() {
      const resp = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/users/${this.user}`
      );

      this.author = resp.data;
    },
  },
};
</script>
<style scoped>
.box-autor {
  margin-top: 20px;
}
.autor {
  padding: 30px 0 50px;
  grid-template-columns: 96px 1fr;
  grid-gap: 10px;
}
.autor img {
  border: 5px solid var(--cor2);
  border-radius: 50%;
}
.autor h5,
.autor h3,
.autor p {
  padding-left: 15px;
}
.autor h5 {
  padding-top: 15px;
}
.autor h3 {
  color: var(--cor2);
  border-bottom: 1px solid var(--cor2);
  margin: 2px 0 15px;
}
.autor p {
  font-size: 0.8rem;
}
</style>