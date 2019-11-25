<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addToDo="addToDo"/>
      <ToDoList :todos="todos" :deleteToDo="deleteToDo"/>
      <ToDoFooter :todos="todos" :deleteCompleted="deleteCompleted" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from './components/ToDoHeader'
  import ToDoList from './components/ToDoList'
  import ToDoFooter from './components/ToDoFooter'
  export default {
    data(){
      return {
        // 从local storage中读取todos数据，
        // 将字符串解析为JSON格式字符串
        todos: JSON.parse(  window.localStorage.getItem('TODOS_KEY')   ||  '[]'  )
      }
    },

    // 监视todos数据，一旦发生变化，就将todos数据存储起来
    // 由于浅度监视只能监视外部数据的变化，不能检测内部数据的变化
    // 需要深度监视
    watch:{
      todos: {
        // 表示深度监视
        deep: true,
        handler: function (val, oldVal) {
          console.log(val)
          // 将todos最新的值数据存储起来，并需要将数组存为JSON格式字符串
          // 要求存的、和读取  均为json格式
          window.localStorage.setItem( 'TODOS_KEY',  JSON.stringify(val) )
        }
      }
    },

    methods:{
      // 添加
      addToDo(todo){
        this.todos.unshift(todo)
      },

      // 删除
      deleteToDo(index){
        this.todos.splice(index, 1)
      },



      // 删除已完成的todos
      // 只要isComplete为true就要全部删除
      // 不需要改变数据内部的内容，则可以不传入形参
      deleteCompleted(){
        // 由于需要将isComplete为true就要全部删除，
        // 则必须过滤得到isComplete为false的数组
        // 符合小括号内的条件留下
        this.todos = this.todos.filter(todo => todo.isComplete != true)
      },


      // 是否全选
      //需要将isComplete全部改为true或false
      // 需要改变数据内部的内容，则必须传入形参
      selectAll(isCheck){
        // 将isComplete逐个遍历修改为true或false，这样就能保证是否可以全选
        this.todos.forEach( todo => todo.isComplete = isCheck)
      },
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
