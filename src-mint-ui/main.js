import Vue from 'vue'
import App from './App'
import {Button}  from 'mint-ui'

// 注册成标签 （这里是全局注册， 每一个子组件都可以使用）
Vue.component(Button.name, Button)


new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})
