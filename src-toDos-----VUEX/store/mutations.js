export default {
  ADDTODO(state, {todo}){
    state.todos.unshift(todo)
  },

  DELETETODO(state, {index}){
    state.todos.splice(index, 1)
  },

  SELECTALL(state, {value}){
    // 将isComplete逐个遍历修改为true或false，这样就能保证是否可以全选
    state.todos.forEach( todo => todo.isComplete = value)
  },

  DELETECOMPLETED(state){
    state.todos = state.todos.filter( todo => todo.isComplete === false)
  },
  //
  RECEIVETODOS(state, todos){
    // 将请求得到的todos赋值给状态中的todos
    state.todos = todos
  }
}
