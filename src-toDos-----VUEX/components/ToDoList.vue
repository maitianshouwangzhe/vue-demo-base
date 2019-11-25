<template>
  <ul class="todo-main">
    <ToDoItem v-for="(todo, index) in todos"
              :todo="todo"
              :key="index"
              :index="index"
    />
  </ul>
</template>

<script>
  import {mapState, } from 'vuex'
  import ToDoItem from './ToDoItem'
  import storageUtil from '../utils/storageUtil'
  export default {

    // 由于这里出现了完整的todos，todos中内部数据的变化可以在此处监视
    computed:{
      ...mapState(['todos']),
    },

    watch: {
      todos: {
        deep: true,    /* 深度监视todos， 一旦todos 发生变化，将其保存 */
        handler: storageUtil.saveToDos
      },
    },

    components:{
      ToDoItem
    }
  }
</script>


<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
