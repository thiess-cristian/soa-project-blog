<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <div class="block">
          <h1 class="title">{{ title }}</h1>
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
export default {
  name: "Post",
  props: {
    title: String,
    content: String,
    author: String,
    date: String,
    tags: Array,
  },
};
</script>

<style>
</style>