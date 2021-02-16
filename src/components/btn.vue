<template>
  <div class="flex box-btn">
    <router-link :to="url">{{ texto }}</router-link>
  </div>
</template>
<script>
export default {
  props: ["texto", "url"],
};
</script>
<style scoped>
.box-btn {
  margin: 40px 0 20px;
  justify-content: center;
  align-items: center;
}
.box-btn a {
  display: inline-flex;
  border: 1px solid var(--tipografia);
  padding: 15px 25px;
  align-self: center;
  transition: 0.2s;
}
.box-btn a:hover {
  background: var(--tipografia);
  color: var(--branco);
}
</style>