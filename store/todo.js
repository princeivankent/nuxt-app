export const state = () => ({
  todos: [
    {task: 'Eat', status: 1},
    {task: 'Sleep', status: 1},
    {task: 'Think', status: 0},
    {task: 'Code', status: 0},
  ],
  todo: {}
})

export const getters = {
  getTodos(state) {
    return state.todos
  }
}

export const mutations = {
  add(state, data) {
    state.todos.push({
      task: data.task,
      status: data.status
    })
  }
  // remove(state, { todo }) {
  //   state.todos.splice(state.todos.indexOf(todo), 1)
  // },
  // toggle(state, todo) {
  //   todo.done = !todo.done
  // }
}