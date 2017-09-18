<template>
    <!-- 面包屑导航 -->
    <div class="memberTree_nav">
        <a class="superior" href="javascript:void(0);" 
            v-for="(item,i) in departNames" :key="i" 
            @click="goBack(i)">{{item}}></a>
        <!-- <span class="curreny">{{current}}</span> -->
    </div>
</template>

<script>
export default {
  
  computed:{
      departNames(){
          return this.$store.state.departNames;
      }
  },

  methods: {
      goBack(i){
          let len = this.departNames.length;
          this.$router.go(i-len);
          this.$store.commit('DELETE_DEPART_NAMES', i);
      }
  }
}
</script>
