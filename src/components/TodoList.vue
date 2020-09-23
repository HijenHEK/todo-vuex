<template>
    <div id="TodoList">
        <TodoItem v-for="(todo , index) in todos" :key="index" :todo="todo"/>
    </div>
</template>


<script>

import {mapState} from 'vuex'
import TodoItem from './TodoItem.vue'

export default {
    name : "TodoList",
    components : {
        TodoItem
    },
    data() {
        return {
            
        }
    },
    computed:mapState(['todos'])
}
</script>

<style scoped>
    #TodoList {
        margin-top: 2rem;
        width: 100%;
        
    }
</style>