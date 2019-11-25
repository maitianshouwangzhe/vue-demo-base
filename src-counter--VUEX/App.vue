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
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    computed: {
      ...mapState(['count']),
      // 这一段代码，相当于下面的注释代码
      ...mapGetters(['eddOrOdd']),

      /*
      eddOrOdd(){
        return this.$store.getters.eddOrOdd
      }
      */
    },

    methods:{
      // 分发不同的标识名， 触发对应的action的调用
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']),
    },
  }
</script>


<style>

</style>
