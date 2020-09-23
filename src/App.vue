<template>
  <div id="app">
    <h1>
      Todo List with Vuejs and Vuex
    </h1>
    <TodoInput />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'App',
  components: {
    TodoInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
</style>
