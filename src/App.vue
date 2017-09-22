<template>
    <div id="app" class="select">
        <!-- 路由出口 -->
            <select-header :classObject="classObject" :title="title"></select-header>
             <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
    </div>
</template>


<script>
import '$styles/reset.css'
import '$styles/index.css'
import SelectHeader from '$components/Header';

export default {

    computed: {
        title(){
            return "选择" + this.$store.state.title;
        }
    },
  components: {
      SelectHeader
  },
  data(){
      return {
          classObject: {
            's-header': true,
            's-header-color': true
          }
      }
  }
}
</script>


  