<template>
  <div class="posts" v-if="loaded">
    <div v-for="post in posts" :key="post._id">
      <Post
        :id="post._id"
        :title="post.title"
        :tags="post.tags"
        :content="post.content"
        :author="post.author"
        :date="post.date"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "../components/Post.vue";
import axios from "axios";

export default {
  name: "Home",
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
