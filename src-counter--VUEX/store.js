/*
* 创建vuex核心的store对象
* */
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用
Vue.use(Vuex)


const state = {
  count: 0,
}

const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(){
    state.count--
  }
}


// 每一个action都是一个函数
const actions = {

  increment({commit}){
    commit('INCREMENT')
  },

  decrement({commit}){
    commit('DECREMENT')
  },

  incrementIfOdd({commit, state}){
    if (state.count % 2 === 0){
      commit('INCREMENT')
    }
  },

  incrementAsync({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    }, 1000)
  },
}

const getters = {
  eddOrOdd(state){
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

// Store为构造函数
export default new Vuex.Store({
  state,  /*  状态的对象  */
  mutations,  /*  更新state的函数的对象    */
  actions,  /* 包含多个对应事件的回调函数的对象    */
  getters,  /*   包含多个getter计算属性的函数   */
})
