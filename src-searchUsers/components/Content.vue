<template>
  <div>
    <h2 v-if="firstView">输入的关键字：{{searchName}}</h2>
    <h2 v-if="loading">加载中.....</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
    <!--  若请求失败， 显示请求错误信息   -->
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      // 组件前后有4个状态
      return {
        // 初始界面
        firstView: true,
        // 请求中的界面
        loading: false,
        // 请求得到的结果的界面
        users: [],
        // 请求失败的界面
        errorMsg: '',
        searchName: '',
      }
    },

    // 由于发送请求后，需要更新界面，即：更新状态
    mounted () {
      // 订阅事件
      PubSub.subscribe('searchName', (msg, searchName) => {
        this.searchName = searchName
        // 发请求前，隐藏初始界面，显示loading
        this.firstView = false
        this.loading = true

        // 将上一次请求的得到的数据置空，避免给这一次操作带来干扰
        this.users = []
        this.errorMsg = ''

        const url =`https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
          .then(response => {
            const result = response.data
            // 根据请求得到的数据，将其生成自己想要的数据形式
            const users = result.items.map( item  => ({
              url: item.html_url,
              avatar: item.avatar_url,
              name: item.login,
            }))
            // 得到想要的数据后，请求结束，隐藏loading显示
            this.loading = false
            this.users = users
          })
          .catch(error => {
            this.loading = false
            this.errorMsg = '请求失败，请检查错误'
          })
      })

    }
  }
</script>


<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
