<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div class="box">
        <h1 class="title">Log in</h1>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="userData.name"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Surname</label>
          <div class="control">
            <input
              v-model="userData.surname"
              class="input"
              type="text"
              placeholder="Surname"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="userData.email"
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
              v-model="userData.password"
              class="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" />
          </div>
        </div>
        <div class="field">
          <button @click="signUp" class="button is-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    signUp() {
      axios.post("/users/register", this.userData).then((response) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
</style>