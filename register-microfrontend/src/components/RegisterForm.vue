<template>
  <div class="box">
    <h1 class="title">Log in</h1>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          v-model="userData.name"
          class="input"
          id="name"
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
          id="surname"
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
          id="email"
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
          id="password"
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
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    signUp() {
      const name = document.getElementById("name").value;
      const surname = document.getElementById("surname").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("email").value;
      axios
        .post("http://localhost:3000/users/register", {
          name,
          surname,
          password,
          email,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
</style>