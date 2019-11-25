<template>
    <div>
      <ul>
        <li v-for="msg in msgList" :key="msg.id">
          <!-- 由于要拼接字符串才能生成动态路由，因此必须写为js语法，则必须要在to前面加上冒号   -->
          <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
          <button @click="replaceShow(msg.id)">replace跳转</button>
          <button @click="pushShow(msg.id)">push跳转</button>
        </li>
        <button @click="$router.go(1)">前进</button>
        <button @click="$router.back()">返回</button>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        msgList: [],
      }
    },

    mounted () {
      // 定时器
      // 模拟发送ajax请求， 2秒之后发送请求
      setTimeout( () => {
        const msgList =  [
          {
            id: 1,
            title: 'message001'
          },
          {
            id: 3,
            title: 'message003'
          },
          {
            id: 5,
            title: 'message005',
          },
        ]
        this.msgList = msgList
      }, 1000)
    },

    methods:{
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      },
      pushShow(id){
        this.$router.push(`/home/message/detail/${id}`)
      }
    }
  }
</script>


<style>

</style>
