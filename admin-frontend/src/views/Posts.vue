<template>
  <div class="posts">
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "Posts",
  components: { Post },
};
</script>

<style>
</style>