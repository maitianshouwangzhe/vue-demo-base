// 包含所有基于state的计算属性
export default {
  // 就算todos的总数量
  totalNum(state){
    return state.todos.length
  },

  // 计算已完成的todos数量
  completedNum (state) {
    return state.todos.reduce( (preTotal, todo) => preTotal  + ( todo.isComplete ? 1 : 0) , 0)
  },

  // 判断是否全部选中, 返回值为true  或 false
  isAllCheck(state, getters) {
    return getters.totalNum === getters.completedNum  &&  state.todos.length > 0
  }

}
