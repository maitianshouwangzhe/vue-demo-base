<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader/>
      <ToDoList />
      <ToDoFooter/>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from './components/ToDoHeader'
  import ToDoList from './components/ToDoList'
  import ToDoFooter from './components/ToDoFooter'
  export default {

    //发送命令，在action中做请求
    mounted(){
      this.$store.dispatch('reqToDos')
    },

    components:{
      ToDoHeader,
      ToDoList,
      ToDoFooter,
    }

  }
</script>


<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
