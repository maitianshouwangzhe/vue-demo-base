<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="请输入关键字" v-model="content"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return {
        content: '',
      }
    },

    methods:{
      // 点击
      search(){
        const searchName = this.content.trim()
        this.content = ''
        if (searchName){
          // 触发事件
          PubSub.publish('searchName', searchName)
        }
      },
    }
  }
</script>


<style>
</style>
