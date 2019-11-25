<template>
  <!-- 加上.native表示用原生的点击监听   -->
  <mt-button type="primary" @click.native="handleClick" style="width: 100%">点击</mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    methods:{
      handleClick(){
        Toast('触发handleClick事件')
      },
    }
  }
</script>


<style>

</style>
