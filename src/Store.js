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
    }
})


export default store ;