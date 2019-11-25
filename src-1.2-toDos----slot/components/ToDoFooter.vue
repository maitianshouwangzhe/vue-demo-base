<template>
  <div class="todo-footer">
    <label>
      <!-- 原始写法 -->
      <!-- <input type="checkbox" v-model="isAllCheck"/> -->

      <!--  可能有多个插槽， 这里的name为唯一标识， 类似于ref  -->
      <slot name="checkAll" ></slot>
    </label>
    <span>
          <!-- 已完成的数量，需要统计和计算出来，则需要计算属性     -->
          <!-- 原始写法 -->
          <!--<span>已完成：{{completedNum}}  / 总数：{{todos.length}} </span>-->



          <slot name="count" ></slot>
    </span>
    <!-- 原始写法 -->
    <!--<button class="btn btn-danger" v-show="completedNum > 0"  @click="deleteCompleted">清除已完成任务</button>-->
    <slot name="deleteBtn" ></slot>
  </div>
</template>

<script>
  export default {

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
