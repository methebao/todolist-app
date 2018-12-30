<template>
  <div class="todo-list">
    <div class="header">
      <div class="heading">
        <h1 class="heading__title">
          <i class="fas fa-th-list"></i>
          Todolist
        </h1>
        <p
          class="heading__completed"
        >Completed Tasks: {{todos.filter(todo => {return getStatus(todo.status)}).length}}</p>
        <p
          class="heading__pending"
        >Pending Tasks: {{todos.filter(todo => {return !getStatus(todo.status)}).length}}</p>
      </div>
      <div class="logout-section">
        <button type="button" class="btn btn-primary" v-on:click="logout">Logout</button>
      </div>
    </div>

    <create-todo v-on:add-todo="addTodo"></create-todo>

    <todo-list v-bind:todos="todos" v-on:remove-todo="removeTodo" v-on:update-todo="updateTodo"></todo-list>
  </div>
</template>
<script>
import APIService from "../api/APIService.js";
import AuthService from "../api/auth.js";
let apiService = new APIService();
let authService = new AuthService();
import TodoList from "../components/TodoList";
import CreateTodo from "../components/CreateTodo";

export default {
  name: "main-view",
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: [],
      user: authService.user
    };
  },

  mounted() {
    apiService
      .getTodos()
      .then(data => {
        this.todos = data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  route: {
    // Check the users auth status before
    // allowing navigation to the route
    canActivate() {
      return authService.user.authenticated;
    }
  },
  methods: {
    getStatus(status) {
      debugger;
      if (status === "1" || status === 1) {
        return true;
      } else {
        return false;
      }
    },

    logout() {
      authService.logout();
    },
    addTodo(todo) {
      debugger;
      apiService
        .addTodo(todo)
        .then(data => {
          this.todos.push(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    removeTodo(todo) {
      apiService
        .removeTodo(todo.id)
        .then(status => {
          if (status === 200) {
            console.log("Successfully Deleted Todo");
            this.todos.splice(this.todos.indexOf(todo), 1);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateTodo(todoBody, todoId) {
      apiService
        .updateTodo(todoBody, todoId)
        .then(data => {
          this.todos[this.todos.findIndex(todo => todo.id === todoId)] = data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" >
body {
  background-color: $color-grey-dark-2;
}
.header {
  display: flex;
  justify-content: space-between;
}
.todo-list {
  font-size: 1.8rem;
  padding: 5rem;
}
.btn-primary {
  color: $color-grey-dark-2;
  font-size: 2rem;
}
.heading {
  &__title {
    font-size: 5rem;
    color: $color-primary-dark;
  }
  &__completed,
  &__pending {
    display: inline-block;
  }
  &__completed {
    margin-right: 2rem;
    padding-right: 2rem;
    border-right: 2px solid $color-pale-gold;
  }
}
</style>
