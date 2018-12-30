<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-6">
      <div class="info-app">
        <div class="heading">
          <h1 class="heading__title">
            <i class="fas fa-th-list"></i>
            TodoList App
          </h1>
          <h2 class="heading__description">Using VueJS & styled with SCSS</h2>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6">
      <div class="account">
        <login-form v-show="!isRegister" v-on:toggle-form="toggleForm" v-on:login="login"></login-form>
        <register-form v-show="isRegister" v-on:toggle-form="toggleForm" v-on:register="register"></register-form>
        <div class="alert alert-warning" role="alert" v-show="alert.status">{{alert.content}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import LoginForm from "../components/account/LoginForm";
import RegisterForm from "../components/account/RegisterForm";
import AuthService from "../api/auth.js";
let authService = new AuthService();

export default {
  name: "login",
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isRegister: false,
      alert: {
        status: false,
        content: "",
        toggleOnOff() {
          this.status = !this.status;
        }
      }
    };
  },
  methods: {
    toggleForm() {
      this.isRegister = !this.isRegister;
    },
    login(account) {
      authService.login(this, account, "todos");
    },
    register(account) {
      authService.register(this, account, "login");
    }
  }
};
</script>

<style lang="scss">
.row {
  margin-right: 0;
}
.info-app {
  width: 100%;
  background-color: $color-grey-dark;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading {
  color: $color-pale-gold;
  &__title {
    font-size: 4rem;
  }
  &__description {
    font-size: 2rem;
    padding-left: 5rem;
  }
}
.account {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.8rem;
  width: 100%;
  .alert {
    margin-top: 1rem;
  }
}
</style>

