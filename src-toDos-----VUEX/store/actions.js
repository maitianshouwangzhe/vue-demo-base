
// 传入的数据，都将其当做封装成一个大的对象

import storageUtil from '../utils/storageUtil'

export default {
  addToDo({commit}, todo){
    commit('ADDTODO', {todo})
  },

  deleteToDo({commit}, index){
    commit('DELETETODO', {index})
  },

  selectAll({commit}, value){
    commit('SELECTALL', {value})
  },

  deleteCompleted({commit}){
    commit('DELETECOMPLETED')
  },

  // 模拟发送异步请求
  reqToDos({commit}){
    setTimeout(() => {
      //读取localStorage内存中已保存数据
      const todos = storageUtil.getToDos()
      commit('RECEIVETODOS', todos)
    }, 500)

  }
}
