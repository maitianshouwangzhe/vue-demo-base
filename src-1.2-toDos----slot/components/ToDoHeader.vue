<template>
  <div class="todo-header">
    <!-- 按回车键确认，则   -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
  </div>
</template>

<script>
  export default {
    props:{
      addToDo: Function,
    },

    data(){
      return {
        title: ''
      }
    },

    methods:{
      add(){
        const title = this.title.trim()
        if (!title){
          alert('必须输入内容')
          return
        }
        // 封装成一个todo对象
        const todo = {
          title,
          isComplete: false
        }


        // 原始写法
        // this.addToDo(todo)


        // 第一和第二种：自定义事件
        // 触发自定义事件
        this.$emit('addToDo', todo)


        // 置空输入数据
        this.title = ''
      }
    }
  }
</script>


<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
