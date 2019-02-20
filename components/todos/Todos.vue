<template>
  <div class="container">
    <ul class="list-group">
      <li 
      v-for="(todo, index) in todos"
      :key="index"
      class="list-group-item">
        <i class="fa fa-check-circle text-success"></i>
        {{ todo.task }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.todo.getTodos
    }
  }
}
</script>

