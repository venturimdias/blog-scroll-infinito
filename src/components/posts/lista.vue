<template>
  <div>
    <ul class="lista grid">
      <li v-for="post in posts" :key="post.id">
        <card v-bind:post="post" />
      </li>
    </ul>
    <div v-if="!hasNextPage" v-observe-visibility="visibilityChanged">...</div>
  </div>
</template>
<script>
import card from "./card";
import axios from "axios";

export default {
  components: {
    card,
  },
  data() {
    return {
      posts: [],
      header: {
        x_wp_total: 1, //current_page
        x_wp_totalpages: 1, //last_page
      },
      page: 1,
    };
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    hasNextPage() {
      return this.header.x_wp_totalpages <= this.page;
    },
  },
  methods: {
    async getPosts() {
      await axios
        .get(
          `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${this.page}`
        )
        .then((response) => {
          //console.log(response.data);
          this.posts.push(...response.data);
          this.header.x_wp_total = response.headers["x-wp-total"];
          this.header.x_wp_totalpages = response.headers["x-wp-totalpages"];
          //console.log(response.headers);
        })
        .catch((response) => {
          console.log(response);
        });

      //this.posts = resp;

      //console.log(resp.headers);
    },
    visibilityChanged(isVisible) {
      if (!isVisible) return;

      if (this.hasNextPage) return;

      this.page++;
      this.getPosts();

      //console.log(this.header.x_wp_totalpages, this.page);
    },
  },

  watch: {},
};
</script>
<style scoped>
.lista {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 10px;
}

@media only screen and (max-width: 768px) {
  .lista {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 500px) {
  .lista {
    grid-template-columns: 1fr;
  }
}
</style>