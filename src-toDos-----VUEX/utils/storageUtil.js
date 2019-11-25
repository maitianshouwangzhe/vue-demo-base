/*
* 使用localStorage存储数据的模块
*
* 一般以两种方式暴露出去：
* 第一种为：函数（仅仅包含为一种功能）
* 第二种为：对象（包含为多个功能）
*
* */

const TODOS_KEY = 'todos_key'
export default {

  // 存储
  saveToDos(toDos){
    window.localStorage.setItem( TODOS_KEY, JSON.stringify(toDos))
  },

  // 读取
  getToDos(){
    return JSON.parse(window.localStorage.getItem(TODOS_KEY)   ||  '[]'  )
  },

}
