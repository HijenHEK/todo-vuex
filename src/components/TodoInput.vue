<template>
    <div id="TodoInput">
        <div class="form">
            <input type="text" v-model="newTodo" @keypress="inputChange">
            <button @click="addTodo">add</button>
        </div>
        <div class="err" v-if="err">
            {{err}}
        </div>
    </div>
</template>

<script>
export default {
    name : "TodoInput",
    data() {
        return {
            newTodo : '' ,
            err : ''
        }
    },
    methods : {
        addTodo(){
            if(!this.newTodo){
                this.err = 'Emty Field !!'
            }else {
                console.log('adding')
            }
        },
        inputChange(){
            if(this.newTodo) {
                this.err = ''
            }
        }
    }
} 
</script>


<style scoped>
    #TodoInput {
        position: relative;
        width: 80%;
        height: 2rem;
        margin : 0 auto ;
    }
    .form {
        display: flex;
        width: 100%;
        justify-content: stretch;
        align-items: center;
    }
    input {
        flex: 0.8;
        margin-right: 0.5rem;
        padding: 0.7rem 1rem;
        outline: none;
        border: none;
        background-color: rgb(43, 43, 77);
        color: white;
        border-radius: 5px;
                opacity: 0.8;


    }
    button {
        flex : 0.15 ;
        padding: 0.7rem;
        border-radius: 5px;
        outline: none;
        border: none;
        background-color: rgb(43, 43, 77);
        color: white;
        opacity: 0.8;
        cursor: pointer;
    }


    button:hover {
        opacity: 1;
                transform: scale(1.02);
    }
    input:focus {
        opacity: 1;
                transform: scale(1.02);

    }

    .err {
        display: absolute ;
        background-color: rgba(170, 33, 33, 0.664);
        color: white;
        padding: 1rem;
        margin: 0.5rem auto;
        width: 7rem;
        border-radius: 5px;
    }
</style>