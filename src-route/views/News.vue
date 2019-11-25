<template>
    <div>
      <ul>
        <li v-for="(news, index) in newsList" :key="index">{{news}}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        newsList: ['new001', 'new002', 'new003']
      }
    }
  }
</script>


<style>

</style>
