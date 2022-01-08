<template>
  <div class="home">
    <Post title="title" content="content" author="author" />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "../components/Post.vue";

export default {
  name: "Home",
  components: { Post },
};
</script>
