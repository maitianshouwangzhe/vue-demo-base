<template>
    <div>
      <li class="list-group-item">
        <div class="handle">
          <a href="#" @click="deleteItem">删除</a>
        </div>
        <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
      </li>
    </div>
</template>

<script>
  export default {
    // 既指定了属性名，还至指定了属性值
    props:{
      comment: Object,
      deleteComment: Function,
      index: Number,
    },
    methods:{
      deleteItem () {
        const {comment, index} = this
        if (window.confirm(`你确定删除${comment.name}的评论吗？`)){
          this.deleteComment(index)
        }
      }
    },
  }
</script>


<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
