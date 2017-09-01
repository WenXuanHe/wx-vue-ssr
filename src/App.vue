<template>
    <div id="app">
        <span>{{count}}</span>
        <div>
             <router-link to="/test">Go to Test</router-link>
        </div>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
        
    </div>
</template>

<script>
export default {

  computed: {
      count() {
          return this.$store.state.count
      }
  }
}
</script>

  