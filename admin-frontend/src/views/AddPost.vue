<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div class="field">
          <span class="label">Title</span>
          <div class="control">
            <input type="text" class="input" v-model="post.title" />
          </div>
        </div>
        <div class="field">
          <span class="label">Content</span>
          <textarea
            class="textarea"
            rows="12"
            v-model="post.content"
          ></textarea>
        </div>
        <div class="field">
          <span class="label">Tags</span>
          <div class="control">
            <input type="text" class="input" v-model="post.tags" />
          </div>
        </div>
        <div class="field">
          <button class="button is-primary" @click="submitPost">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPost",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    submitPost() {
      this.post.tags = this.post.tags.trim().split(",");
      this.post.author = this.$store.state.user.username;
      console.log(this.post.author);
      const date = new Date();
      this.post.date = date.toDateString();
      axios
        .post("/posts", this.post)
        .then((response) => {
          //console.log(response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
  },
};
</script>

<style>
</style>