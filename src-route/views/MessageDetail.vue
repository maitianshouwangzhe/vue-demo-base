<template>
  <div>
    <!--  动态组件，随着路由组件中携带过来的参数，界面显示随之发生改变    -->

    <!-- 路由组件中读取携带过来的参数   -->
    <h3>ID为: {{$route.params.id}}</h3>
    <ul>
      <li>id: {{detail.id}}</li>
      <li>title: {{detail.title}}</li>
      <li>content: {{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        detail: {}
      }
    },

    mounted () {
      setTimeout( () => {
        // 模拟请求得到的数据（局部变量）
        const messageDetails = [
          {id: 1, title: '标题001', content: '内容content00111'},
          {id: 3, title: '标题003', content: '内容content00333'},
          {id: 5, title: '标题005', content: '内容content00555'},
        ]
        // 保存到组件对象上, 便于后面使用
        this.messageDetails = messageDetails

        const id = this.$route.params.id * 1
        this.detail = messageDetails.find(detail => detail.id === id  )
      }, 1000)
    },

    watch: {
      // 每一次点击，使得路由路径（params）发生了变化，则传入了不同的$route，监视它的变化
      $route: function (value) {
        // 改变当前路由组件参数数据时自动调用
        // value就是当前的this.$route
        console.log('this.$route', value )
        const id = value.params.id
        this.detail = this.messageDetails.find(detail => detail.id === id*1 )
      }
    },
  }
</script>


<style>

</style>
