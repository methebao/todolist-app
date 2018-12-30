import axios from "axios";
import AuthService from "./auth.js";
let authService = new AuthService();
const API_URL = "http://localhost:8080/api";

class APIService {
  getTodos() {
    const url = `${API_URL}/todos/`;
    return axios
      .get(url, { headers: authService.getAuthHeader() })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
  addTodo(todo) {
    const url = `${API_URL}/todo/`;
    return axios
      .post(url, todo, { headers: authService.getAuthHeader() })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
  removeTodo(todoId) {
    const url = `${API_URL}/todo/${todoId}`;

    return axios
      .delete(url, { headers: authService.getAuthHeader() })
      .then(response => {
        return response.status;
      })
      .catch(error => {
        return error;
      });
  }
  updateTodo(todoBody, todoId) {
    const url = `${API_URL}/todo/${todoId}`;
    return axios
      .put(url, todoBody, { headers: authService.getAuthHeader() })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
}
export default APIService;
