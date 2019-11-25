<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <!-- 已完成的数量，需要统计和计算出来，则需要计算属性     -->
          <span>已完成{{completedNum}}</span> / 总数{{todos.length}}}
        </span>
    <button class="btn btn-danger" v-show="completedNum > 0"  @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      todos: Array,
      deleteCompleted: Function,
      selectAll: Function
    },

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


  }
</script>


<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
