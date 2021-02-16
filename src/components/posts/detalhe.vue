<template>
  <div>
    <!-- {{ categoria }}
    {{ slug }}-->
    <div v-for="p in post" :key="p.id">
      <h1 v-html="p.title.rendered"></h1>

      <img :src="p._embedded['wp:featuredmedia'][0].source_url" />

      <div class="desc" v-html="p.content.rendered"></div>

      <btn texto="Voltar para lista" url="/" />

      <autor :user="p.author" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import autor from "@/components/posts/autor";
import btn from "@/components/btn";

export default {
  components: {
    autor,
    btn,
  },
  props: ["categoria", "slug"],
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const resp = await axios.get(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${this.slug}`
      );
      this.post = resp.data;
    },
  },
  computed: {},
  watch: {},
};
</script>
<style scoped>
img,
.desc >>> img {
  display: block;
  max-width: 100%;
  width: auto;
  height: auto;
  margin: 40px auto;
}
.desc >>> h2 {
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid var(--cor3);
  border-bottom: 1px solid var(--cor3);
}
.desc >>> p {
  line-height: 120%;
  padding: 5px 0 5px;
}
.desc >>> ul,
.desc >>> ol {
  padding: 0 0 0 20px;
}
.desc >>> ul li,
.desc >>> ol li {
  padding: 5px 0 5px 0px;
  list-style: disc;
}

.desc >>> .jeg_video_content {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  max-width: 760px;
  width: 95%;
  padding-bottom: 40%;
  position: relative;
}
.desc >>> .jeg_video_content:after {
  content: "";
  background: var(--tipografia);
  width: 3000px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;
  bottom: 30px;
  z-index: 1;
}
.desc >>> .jeg_video_content iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 5;
}
</style>