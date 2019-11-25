import Vue from 'vue'
import App from './App'
import store from './store'


// 引入全局的样式
import './base.css'


new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store,
})


// 两段代码功能一样
/*

new Vue({
  el: '#app',
  render: h => h(App),
  store,
})

*/





// toDos-----VUEX
