<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div class="block is-flex is-justify-content-space-between">
          <h1 class="title">{{ title }}</h1>
          <button @click="deletePost" class="delete is-large"></button>
        </div>
        <div class="columns">
          <div class="column has-text-grey">by {{ author }}</div>
          <div class="column has-text-grey">12/12/32 12:34</div>
        </div>
        <div class="block">
          {{ content }}
        </div>
        <div class="block">
          <div class="tags">
            <span class="tag" v-for="tag in tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  props: {
    id: String,
    title: String,
    content: String,
    author: String,
    date: String,
    tags: Array,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.isAuthenticated = this.$store.state.isAuthenticated;
  },
  methods: {
    async deletePost() {
      await axios
        .delete(`/posts/${this.id}`)
        .then((response) => {
          this.$emit("wasDeleted");
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