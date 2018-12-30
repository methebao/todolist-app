<template>
  <form class="register-form">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="inputUserNameReg"
        placeholder="Enter username"
        v-model="username"
      >
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="inputFullName"
        placeholder="Enter full name"
        v-model="fullname"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        id="inputPasswordReg"
        placeholder="Password"
        v-model="password"
      >
    </div>
    <div class="buttons">
      <button type="button" v-on:click="toggleForm" class="btn btn-back">Back</button>
      <button type="button" class="btn btn-primary" v-on:click="onRegisterPressed">Register</button>
    </div>
  </form>
</template>

<script type="text/javascript">
export default {
  name: "registerForm",
  data() {
    return {
      username: "",
      fullname: "",
      password: ""
    };
  },
  methods: {
    toggleForm() {
      this.$emit("toggle-form");
    },
    onRegisterPressed() {
      let account = {
        username: this.username,
        fullname: this.fullname,
        password: this.password
      };
      this.$emit("register", account);
    }
  }
};
</script>

<style lang="scss">
.register-form {
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
  .btn {
    color: #fff;

    font-size: 1.5rem;
    padding: 1rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  .btn-primary {
    background-color: $color-primary-dark;
    border: none;
  }
  .btn-back {
    color: $color-grey-dark-2;
    background-color: $color-grey-light-2;
  }
}
</style>

