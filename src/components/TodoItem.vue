<template>
    <div id="TodoItem">
        {{todo.title}}
    </div>
</template>


<script>
export default {
    name : "TodoItem" ,
    props : ['todo'] ,
}
</script>