<template>
  <div id="app">
    <h1>
      Todo List with Vuejs and Vuex
    </h1>
    <TodoInput />

    <TodoList />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
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


.btn {
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 5px ;
    color: white;

}
.btn:hover {
  opacity: 1;
  transform: scale(1.03);
}

.btn-sucess {
  background-color: rgb(52, 150, 52);
}
.btn-danger {
  background-color: rgb(226, 5, 5);

}
.btn-primary {
  background-color: rgb(5, 101, 226);
  
}
</style>
