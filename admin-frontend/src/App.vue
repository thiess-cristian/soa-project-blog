<template>
  <div>
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/add_post">Add post</router-link> |
      <router-link to="/posts">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
