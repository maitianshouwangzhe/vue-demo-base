<template>
  <div class="todo-header">
    <!-- 按回车键确认，则输入数据   -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        // 自己组件内部使用的数据，则不需要放在vuex中管理状态
        title: ''
      }
    },

    methods:{
      add(){
        // 取出输入的内容
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

        // 分发标识符， 触发action调用
        this.$store.dispatch('addToDo', todo)

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
