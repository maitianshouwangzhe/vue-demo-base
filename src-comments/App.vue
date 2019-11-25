<template>
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue框架的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment" />
      </div>
    </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    // 数据在哪个组件，更新数据的行为或方法就因该定义在该组件
    data(){
      return {
        comments: [
          {
            name: '于',
            content: '努力学习vue'
          },
          {
            name: '雷',
            content: '一起努力'
          },
        ]
      }
    },

    methods:{
      // 添加评论
      addComment(comment){
        this.comments.unshift(comment)
      },
      // 删除评论
      deleteComment(index){
        this.comments.splice(index, 1)
      },
    },

    components:{
      Add,
      List
    },
  }
</script>


<style>

</style>
