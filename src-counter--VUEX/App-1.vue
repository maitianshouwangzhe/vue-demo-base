<template>
    <div>
      <h3>点击了：{{count}}次数， 次数为：<span style="color: red">{{eddOrOdd}}</span></h3>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">若为偶数，则加1</button>
      <button @click="incrementAsync">异步加1</button>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        count: 0,

      }
    },
    methods:{
      increment(){
        this.count = this.count + 1
      },
      decrement(){
        this.count = this.count - 1
      },
      incrementIfOdd(){
        if (this.count % 2 === 0){
          this.count = this.count + 1
        }
      },
      incrementAsync(){
        setTimeout(()=>{
          this.count = this.count + 1
        }, 1000)
      },
    },

    computed: {
      eddOrOdd(){
        return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    }
  }
</script>


<style>

</style>
