<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Home </router-link>
        <router-link to="/posts" class="navbar-item"> Posts </router-link>
        <router-link to="/add_post" class="navbar-item"> Add post </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div v-if="!$store.state.isAuthenticated">
              <router-link to="/sign_up" class="button is-primary">
                <strong>Sign up</strong>
              </router-link>
              <router-link to="/login" class="button is-light">
                Log in
              </router-link>
            </div>

            <button
              @click="logout"
              v-if="$store.state.isAuthenticated"
              class="button is-light"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  methods: {
    logout() {
      axios.post("/users/logout").then((response) => {
        const token = response.data.token;

        this.$store.commit("removeToken");

        axios.defaults.headers.common["Authorization"] = "";

        localStorage.removeItem("token");

        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>