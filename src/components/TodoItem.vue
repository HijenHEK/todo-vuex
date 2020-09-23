<template>
    <div id="TodoItem">
        <div class="title" :class="{'done' : todo.done}">
            {{todo.title}}
        </div>
        <div class="controls">
            <button class="btn btn-primary" v-if="todo.done" @click="todoDone">not done yet ?</button>

            <button class="btn btn-sucess" v-if="! todo.done" @click="todoDone">done ?</button>
            <button class="btn btn-danger" @click="todoDel">delete</button>
        </div>
    </div>
</template>


<script>
export default {
    name : "TodoItem" ,
    props : ['todo'] ,
    methods : {
        todoDone() {
            this.$store.dispatch('TODO_DONE' , this.todo)
        },
        todoDel() {
            this.$store.dispatch('TODO_DEL' , this.todo)
        }

    }
}
</script>


<style scoped>
    #TodoItem {
        width: 90%;
        margin : 1rem auto ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(176, 176, 196);
        padding: 0.5rem 1rem;
        border-radius: 5px;
        color: white;
    }
    #TodoItem:hover {
        transform: scale(1.03);
        background-color: rgb(136, 136, 163);
        
        color: white;
    }

    .title {
        padding: 0.5rem 2rem 0.5rem 0;
    }
    .controls>button:last-child {
        margin-left: 0.5rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>