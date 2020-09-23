import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store =  new Vuex.Store({
    state : {
        todos : [
            {
                title : "work out" ,
                done : false 
            },
            {
                title : "reading a book" ,
                done : false 
            },
            {
                title : "fishing" ,
                done : false 
            },
            {
                title : "Studing" ,
                done : false 
            }

        ]
    },
    mutations : {
        todoDone(state,payload) {
                state.todos.map((todo)=> {
                if (todo == payload) {
                    todo.done = !todo.done
                }
            })
        }
        ,
        todoDel(state,payload) {
            state.todos = state.todos.filter(todo => todo != payload)
        },
        todoAdd(state,payload) {
            const newTodo = {
                title : payload ,
                done : false
            }
            state.todos.push(newTodo)
        }
    },
    actions : {
        TODO_DONE({commit} , todo){
            commit('todoDone', todo)
        },
        TODO_DEL({commit} , todo) {
            commit('todoDel' , todo)
        },
        TODO_ADD({commit} , todo) {
            commit('todoAdd' , todo)
        }
    }
})


export default store ;