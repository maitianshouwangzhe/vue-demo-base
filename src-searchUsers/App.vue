<template>
  <div class="container">
    <Search/>
    <!-- 变换标签的名字      -->
    <users-content/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Content from './components/Content'
  export default {
    components:{
      Search,
      UsersContent: Content,
    },
    data(){
      return {
      }
    },
  }
</script>


<style>
</style>
