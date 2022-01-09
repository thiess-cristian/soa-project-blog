<template>
  <div class="columns">
    <Filter />
    <div class="column is-6 is-offset-3">
      <div class="posts" v-if="loaded">
        <Post
          v-for="post in posts"
          :key="post._id"
          :id="post._id"
          :title="post.title"
          :tags="post.tags"
          :content="post.content"
          :author="post.author"
          :date="post.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "../components/Post.vue";
import Filter from "../components/Filter";
import axios from "axios";

export default {
  name: "Home",
  components: { Post, Filter },
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
    async getPosts() {
      await axios
        .get("posts")
        .then((response) => {
          this.posts = [];
          for (let i = 0; i < response.data.length; i++) {
            this.posts.push(response.data[i]);
          }
          this.loaded = true;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
