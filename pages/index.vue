<template>
  <section class="container">
    <div class="mt-3">
      <div class="row">
        <div class="col-md-6 col-sm-12"></div>
        <div class="col-md-6 col-sm-12">
          <Todos />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Todos from '@/components/todos/Todos'

export default {
  components: {
    Todos
  },
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.todos = response.data
      });
    }
  }
}
</script>
