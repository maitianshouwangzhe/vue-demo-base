<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <!--  使用 v-model 实时 收集数据      -->
        <input type="text" class="form-control" placeholder="用户名" v-model="name"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"/>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <!-- 绑定事件监听          -->
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    // props的完整用法
    props:{
      addComment: {
        type: Function,
        required: true,
      }
    },

    data(){
      return {
        name: '',
        content: '',
      }
    },
    methods:{
      add(){
        // 1、 取出输入框的输入数据
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert(' 输入的姓名或内容为空')
          //这里使用return表示从此处终止语句
          return
        }
        // 2、根据得到的输入内容，封装成一个comment对象
        const comment = {name, content}
        //  3、将封装的comment对象添加到comments数组中
        this.addComment(comment)
        //  清除输入的内容
        this.name = ''
        this.content = ''
      }
    }
  }
</script>


<style>

</style>
