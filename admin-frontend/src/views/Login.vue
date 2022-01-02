<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div class="box">
        <h1 class="title">Log in</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="loginData.email"
              class="input"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              v-model="loginData.password"
              class="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="field">
          <button @click="login" class="button is-primary">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      loginData: {},
    };
  },
  methods: {
    login() {
      axios
        .post("/users/login", this.loginData, {
          withCredentials: true,
          credentials: "include",
        })
        .then((response) => {
          const token = response.data.token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          this.$router.push("/");
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