import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'


//使用插件，声明式使用
// 一旦声明使用，内部会给vm对象和组件对象添加一个属性：$http
Vue.use(VueResource)

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>'
})
