<template>
    <div>
      <!-- 空字符串 对应的为false   -->
      <div v-if="!repoUrl" style="font-size: 30px">loading....</div>
      <div v-else style="font-size: 30px" >The most star repo is <a :href="repoUrl" target="_blank">{{repoName}}</a></div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        repoName: '',
        repoUrl: '',
        isShow: true
      }
    },

    mounted () {
      const keyWords = 'vuejs'
      const url = `https://api.github.com/search/repositories?q=${keyWords}&sort=stars`
      this.$http.get(url)
        .then(response => {
          const result = response.data
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        })
        .catch( err => {
          alert('请求失败')
        })
    },

  }
</script>

<style>
</style>


<!--
使用 vue-resource发起ajax请求
-->
