<template>
  <div class="todos-board">
    <todo
      v-for="todo in todos"
      v-bind:todo="todo"
      v-bind:key="todo.id"
      v-on:remove-todo="removeTodo"
      v-on:update-todo="updateTodo"
    ></todo>
  </div>
</template>
<script type = "text/javascript" >
import Todo from "./Todo";
import APIService from "../api/APIService.js";
let apiService = new APIService();

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    removeTodo(todo) {
      this.$emit("remove-todo", todo);
    },
    updateTodo(todoBody, todoId) {
      this.$emit("update-todo", todoBody, todoId);
    }
  }
};
</script>
<style lang="scss">
.todos-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 5rem;
}
</style>