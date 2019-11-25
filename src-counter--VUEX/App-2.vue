<template>
    <div>
      <h3>点击了：{{$store.state.count}}次数， 次数为：<span style="color: red">{{eddOrOdd}}</span></h3>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">若为偶数，则加1</button>
      <button @click="incrementAsync">异步加1</button>
    </div>
</template>

<script>
  export default {

    methods:{
      increment(){
        // 通知vuex，分发标识名， 触发对应的action的调用
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      },
    },

    computed: {
      eddOrOdd(){
        // 这里需要写this，是因为这里是js语法
        // 而在模板中（第三行）不需要写this
        return this.$store.getters.eddOrOdd
      }
    }
  }
</script>


<style>

</style>
