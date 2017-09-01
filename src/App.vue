<template>
    <div id="app">
        <span>{{count}}</span>
        <div class="nav">
             <router-link to="/test">Go to Test</router-link>
        </div>
        <!-- 路由出口 -->
        <div class="content">
             <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    :root{
        --bc:#fefefe;
        --h: 80px;
    }
    .nav{
        height: var(--h);
        line-height: var(--h);
        background-color: var(--bc);
    }

</style>

<script>
export default {

  computed: {
      count() {
          return this.$store.state.count
      }
  }
}
</script>

  