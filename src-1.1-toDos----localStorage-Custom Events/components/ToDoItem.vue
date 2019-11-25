<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{backgroundColor: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.isComplete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props:{
      todo: Object,
      index: Number,
      deleteToDo: Function,
    },

    data(){
      return {
        bgColor: 'white',
        // 删除按钮是否显示
        isShow: false
      }
    },

    methods:{
      handleEnter(isEnter){
        if (isEnter){
          this.bgColor = 'gray'
        } else {
          this.bgColor = 'white'
        }
        this.isShow = isEnter
      },

      deleteItem(){
        const {todo, index} = this
        if ( window.confirm(`你确实删除${todo.title}吗？`) ) {
          this.deleteToDo(index)
        }
      }
    }
  }
</script>


<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
