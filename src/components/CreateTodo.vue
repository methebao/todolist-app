<template>
  <div class="add-todo-section">
    <a class="btn btn-primary" v-on:click="toogleForm" v-show="!isCreating">
      <i class="fas fa-plus-square"></i>
      <span class="add-todo-heading">Add Todo</span>
    </a>
    <div class="card" v-show="isCreating">
      <div class="card-title">
        <input class="title-input" type="text" v-model="name" placeholder="Name">
        <input
          class="description-input"
          type="text"
          v-model="description"
          placeholder="Description"
        >
      </div>
      <div class="float-right">
        <button class="btn btn-success" v-on:click="sendForm()">Create</button>
        <button class="btn btn-info" v-on:click="toogleForm">Close X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      isCreating: false
    };
  },
  methods: {
    toogleForm() {
      this.isCreating = !this.isCreating;
    },

    sendForm() {
      let todo = {
        name: this.name,
        description: this.description
      };

      if (this.name.length > 0) {
        this.$emit("add-todo", todo);
      }
      this.name = "";
      this.description = "";
      this.isCreating = false;
    }
  }
};
</script>
<style lang="scss" >
.card {
  padding: 1rem;
  background-color: $color-grey-light-1;
}
.card-title {
  background-color: $color-grey-dark-2;
  padding: 0.5 1rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  .todo-title {
    margin-left: 2rem;
    font-weight: 700;
    color: $color-primary;
  }
  .title-input {
    color: $color-primary;
    width: 100%;
    background-color: $color-grey-light-1;
    border-radius: 0.2rem;
    border: 0;
    margin: 0.5rem;
    padding-left: 1rem;
    &::placeholder {
      color: $color-grey-light-1;
    }
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
}
.card-text {
  color: $color-grey-dark-2;
  font-size: 1.5rem;
}
.btn {
  font-size: 1.5rem;
  padding: 1rem 2rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
}
.btn-primary {
  background-color: $color-primary;
  border: 0;
  padding: 0 2rem;
  .fa-plus-square {
    font-size: 2.5rem;
  }
  &:hover {
    background-color: $color-pale-gold;
  }
}
.add-todo-heading {
  font-size: 2.5rem;
  color: $color-grey-dark-2;
  margin-left: 2rem;
}
</style>
