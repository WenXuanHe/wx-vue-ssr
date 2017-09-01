
<template>
    <div class="memberSearchList">
        <ul>
            <li v-for="item in searchedPersons"
                v-on:click="searchChoosed(item.domainDeptID)"
                v-bind:key="item.domainDeptID">
                <span class="searchItem">{{item.nodeDesc}}（{{item.deptNodeName}}）</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

  computed: {
      searchedPersons(){
          return this.$store.getters.searchedPersons
      },
      exceedMax() { 
          return this.$store.getters.exceedMax
     }
  },
  methods: {
      searchChoosed (domainDeptID){
          // 超过可选最大数，不处理  todo
          if(this.exceedMax) return;
          //通过id 找到数据，将choosed置为true
          this.$store.commit('chooseByID', domainDeptID);
      }
  }
}
</script>

