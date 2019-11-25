<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <!-- 已完成的数量，需要统计和计算出来，则需要计算属性     -->
          <span>已完成{{completedNum}}</span> / 总数{{totalNum}}
        </span>
    <button class="btn btn-danger" v-show="completedNum > 0"  @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {

    methods:{
      ...mapActions(['deleteCompleted']),
    },


    // 计算属性
    computed:{
      ...mapGetters(['totalNum', 'completedNum',]),
      isAllCheck: {
        get(){
          return this.$store.getters.isAllCheck
        },
        // 此时的参数values是isAllCheck最新的值, true或false
        set(value){
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

  }
</script>


<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
