<template>
    <div id="app" class="select">
        <!-- 路由出口 -->
            <select-header :classObject="classObject" :title="title"></select-header>
             <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
    </div>
</template>

<style>
@import './client/styles/mixin.css';

.s-header {
    @mixin h50;
    text-align: center;
    &::before {
        content: '<';
        display: inline;
        clear: both;
        position: absolute;
        left: 0px;
        padding-left: 20px;
        padding-right: 20px;
    }
}

.s-header-color {
    background-color: var(--header-bc);
    color: var(--header-c);
}

</style>

<script>
import '$styles/reset.css'
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


  