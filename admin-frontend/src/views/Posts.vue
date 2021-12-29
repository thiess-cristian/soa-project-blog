<template>
  <div class="posts" v-if="loaded">
    <div v-for="post in posts" :key="post._id">
      <Post :title="post.title" :tags="post.tags" :content="post.content" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import axios from "axios";

export default {
  name: "Posts",
  components: { Post },
  data() {
    return {
      posts: [],
      loaded: false,
    };
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios
        .get("/posts/")
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            this.posts.push(response.data[i]);
          }
          this.loaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>