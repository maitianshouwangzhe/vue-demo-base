<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 原始写法 -->
      <!-- <ToDoHeader :addToDo="addToDo"/>   -->


      <!-- 第一种自定义事件-->
      <!--  给ToDoHeader标签对象绑定addToDo事件监听   -->
      <!--<ToDoHeader @addToDo="addToDo"/>-->


      <!-- 第二种自定义事件： 需要一开始就要绑定事件监听，因此需要mounted生命周期-->
      <ToDoHeader ref="header"/>


      <ToDoList :todos="todos"/>
      <!--<ToDoFooter :todos="todos" :deleteCompleted="deleteCompleted" :selectAll="selectAll"/>-->

      <ToDoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成：{{completedNum}}  / 总数：{{todos.length}} </span>
        <button slot="deleteBtn" class="btn btn-danger" v-show="completedNum > 0"  @click="deleteCompleted">清除已完成任务</button>
      </ToDoFooter>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from './components/ToDoHeader'
  import ToDoList from './components/ToDoList'
  import ToDoFooter from './components/ToDoFooter'
  import PubSub from 'pubsub-js'
  import storageUtil from './utils/storageUtil'
  export default {
    data(){
      return {
        // 实现数据的持久化存储
        // 从local storage中读取todos数据，
        // 将字符串解析为JSON格式字符串
        todos: storageUtil.getToDos()
      }
    },


    // 将其从子组件移动到父组件中来
    // 计算属性
    computed:{
      // 已完成的数量
      completedNum(){
        // 一旦isComplete为true就在原来数字的基础上加1
        return this.todos.reduce( (preTotal, todo) => preTotal  + ( todo.isComplete ? 1 : 0) , 0)
      },

      isAllCheck: {
        get(){
          return  this.completedNum > 0 &&  this.completedNum === this.todos.length
        },
        // 此时的参数values是isAllCheck最新的值, true或者false
        set(value){
          this.selectAll(value)
        }
      }
    },

    mounted(){
      //  执行异步代码。（绑定事件也是异步， 订阅与发布机制，也是异步）
      this.$refs.header.$on('addToDo', this.addToDo)
      PubSub.subscribe('deleteToDo',  (msg, index) => {
        this.deleteToDo(index)
      })
    },

    // 监视todos数据，一旦发生变化，就将todos数据存储起来
    // 由于浅度监视只能监视外部数据的变化，不能检测内部数据的变化
    // 需要深度监视
    watch:{
      todos: {
        // 表示深度监视
        deep: true,
       /*

       handler: function (val, oldVal) {
          console.log(val)
          // 将todos最新的值数据存储起来，并需要将数组存为JSON格式字符串
          // 要求存的、和读取  均为json格式
          storageUtil.saveToDos(val)
          }
      */

       // 简化上面的代码
       // 由于handler需要回调函数
       handler: storageUtil.saveToDos
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

      // 删除已完成(已经选中的)的todos
      // 只要isComplete为true就要全部删除
      // 不需要改变数据内部的内容，则可以不传入形参
      deleteCompleted(){
        // 由于需要将isComplete为true就要全部删除，
        // 则必须过滤得到isComplete为false的数组
        // 将符合小括号内的条件留下
        this.todos = this.todos.filter(todo => todo.isComplete != true)
      },


      // 是否全选
      // 思路：将isComplete全部改为true或false
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
