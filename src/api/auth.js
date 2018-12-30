const API_URL = "http://localhost:8080/api";
import axios from "axios";
import router from "../router";

class AuthService {
  user = {
    authenticated: false
  };
  login(context, account, redirect) {
    const url = `${API_URL}/login/`;
    axios
      .post(url, account)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        this.user.authenticated = true;
        // Redirect to route
        if (redirect) {
          router.replace(redirect);
        }
      })
      .catch(error => {
        context.alert.toggleOnOff();
        context.alert.content = `Failed to login. Error: ${error}`;
      });
  }
  register(context, account, redirect) {
    const url = `${API_URL}/account/`;
    axios
      .post(url, account)
      .then(response => {
        if (response.data) {
          context.toggleForm();
          context.alert.toggleOnOff();
          context.alert.content = "Successfully created an account.";
        }
      })
      .catch(error => {
        context.alert.toggleOnOff();
        context.alert.content = `Failed to login. Error: ${error}`;
      });
  }
  logout() {
    localStorage.removeItem("token");
    this.user.authenticated = false;
    router.replace("/login");
  }
  checkAuth() {
    var hadToken = localStorage.getItem("token");
    if (hadToken) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  }
  getAuthHeader() {
    return {
      accessToken: localStorage.getItem("token")
    };
  }
}
export default AuthService;
