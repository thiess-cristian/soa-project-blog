<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
