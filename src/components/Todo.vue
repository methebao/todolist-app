<template>
  <div class="card">
    <div class="card-body" v-show="!isEditting">
      <div class="card-title">
        <input
          type="checkbox"
          name="checkDone"
          id="checkDone"
          v-model="status"
          v-on:change="checkBoxClicked(todo)"
        >
        <label class="todo-title" for="checkDone">{{ todo.name }}</label>
      </div>
      <p class="card-text">{{ todo.description }}</p>

      <div class="float-right">
        <span class="icon" v-on:click="toogleForm">
          <i class="fas fa-edit"></i>
        </span>
        <span class="icon" v-on:click="removeTodo(todo)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>

    <div class="card-body" v-show="isEditting">
      <div class="card-title">
        <input class="title-input" type="text" v-model="todo.name">
        <input class="description-input" type="text" v-model="todo.description">
        <label class="complete-title" for="checkDone">Completed:</label>
        <input
          type="checkbox"
          name="checkDone"
          id="checkDone"
          v-model="status"
          v-on:change="changeStatus(todo)"
          
        >
      </div>
      <div class="float-right">
        <button class="btn btn-primary success-button" v-on:click="updateTodo(todo)">Save</button>
        <button class="btn btn-primary" v-on:click="toogleForm">Close X</button>
      </div>
    </div>
    <div class="ui positive message" v-show="status">Completed</div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todo"],
  data() {
    return {
      isEditting: false
    };
  },
  computed: {
    status: {
      get() {
     
        return this.todo.status === "1" || this.todo.status === 1;
      },
      set(newVal) {
        if (newVal) {
          this.todo.status = 1;
        } else {
          this.todo.status = 0;
        }
      }
    }
  },
  methods: {
    toogleForm() {
      this.isEditting = !this.isEditting;
    },
    removeTodo(todo) {
      this.$emit("remove-todo", todo);
    },
    updateTodo(todo) {
      let todoBody = {
        name: todo.name,
        description: todo.description,
        status: todo.status
      };

      this.$emit("update-todo", todoBody, todo.id);
      this.toogleForm();
    },
    changeStatus(todo) {
      if (!this.status) {
        todo.status = 0;
      } else {
        todo.status = 1;
      }
    },
    checkBoxClicked(todo) {
      this.changeStatus(todo);
      let todoBody = {
        status: todo.status
      };
      this.$emit("update-todo", todoBody, todo.id);
    }
  }
};
</script>
<style lang="scss">
.icon {
  color: $color-black;
  cursor: pointer;
}
.card {
  flex-basis: calc((100% / 3) - 2rem);
  &:not(:last-child) {
    margin-right: 2rem;
  }
  .card-title {
    background-color: $color-grey-dark-2;
    padding: 0 1rem;
    border-radius: 0.5rem;
    .todo-title {
      margin-left: 2rem;
      font-weight: 700;
      color: $color-primary;
    }
    .title-input {
      color: $color-primary;
      width: 100%;
      background-color: $color-grey-dark;
      border-radius: 0.2rem;
      border: 0;
      margin: 0.5rem;
      padding-left: 1rem;
    }
    .description-input {
      color: $color-grey-dark;
      width: 100%;
      background-color: $color-grey-light-1;
      border-radius: 0.5rem;
      border: 0;
      margin: 0.5rem;
      padding-left: 1rem;
    }
    .complete-title {
      font-size: 1.5rem;
      color: $color-white;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  .card-text {
    color: $color-grey-dark-2;
    font-size: 1.5rem;
  }
  .checkbox {
    background-color: $color-primary;
  }
  .btn-primary {
    background-color: $color-primary-dark;
    border: none;
  }
  .success-button {
    background-color: $color-pale-gold;
  }
}
</style>
