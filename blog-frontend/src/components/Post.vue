<template>
  <div class="box">
    <div class="block is-flex is-justify-content-space-between">
      <h1 class="title">{{ title }}</h1>
      <button
        v-if="isAuthenticated"
        @click="deletePost"
        class="delete is-large"
      ></button>
    </div>
    <div class="columns">
      <div class="column has-text-grey">by {{ author }}</div>
      <div class="column has-text-grey">{{ date }}</div>
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
    this.isAuthenticated = false;
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