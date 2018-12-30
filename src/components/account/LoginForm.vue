<template>
  <form class="login-form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="inputUserName"
        placeholder="Enter username"
        v-model="username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        id="inputPassword"
        placeholder="Password"
        v-model="password"
      >
    </div>
    <div class="buttons">
      <button type="button" v-on:click="toggleForm" class="btn btn-primary">Register</button>
      <button type="button" class="btn btn-primary" v-on:click="onLoginPressed">Login</button>
    </div>
  </form>
</template>

<script type="text/javascript">
export default {
  name: "loginForm",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    toggleForm() {
      this.$emit("toggle-form");
    },
    onLoginPressed() {
      let account = {
        username: this.username,
        password: this.password
      };
      debugger;
      this.$emit("login", account);
    }
  }
};
</script>

<style lang="scss">
.login-form {
  min-width: 70%;
  border: 5px solid grey;
  padding: 5rem;

  .form-control {
    font-size: 1.4rem;
    padding: 1.5rem 2rem;
    &::placeholder {
      font-size: 1.5rem;
    }
    &:focus {
      outline: none;
      border: 1px solid $color-primary;
    }
  }
  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .btn-primary {
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem;
    background-color: $color-primary-dark;
    border-color: $color-primary;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>

