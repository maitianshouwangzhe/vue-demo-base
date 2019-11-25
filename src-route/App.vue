<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue路由的学习</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--   生成路由链接   -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--  一旦从About组件切换到的Home组件， 则组件About就死亡了。一旦再返回，则About组件重新显示。    -->
            <!-- 为了保证切换时，保证组件About活着，则需要使用keep-alive    -->
            <keep-alive>
              <!--   向路由组件中传递数据   -->
              <router-view msg="ABCD"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*   打开一个页面  */
  // window.location = 'https://www.baidu.com/'
  export default {}
</script>

<style>

</style>
