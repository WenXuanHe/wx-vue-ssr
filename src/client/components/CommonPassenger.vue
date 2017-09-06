<template>
  
  <div  class="comPas">
        <div class="comPas_title" v-on:click="hideComPas">
            <span class="comPasPic">
                <span class="comPasPicture" v-bind:class="{'comPasPictureRight': isHide}"></span>
                </span>常用{{title}}
            </div>
        <ul class="comPas_people pb20" v-show="!isHide">
           <li v-for="item in commonPersons" 
            v-bind:key='item.domainDeptID'  
            v-bind:class="{ 'choose': item.choosed}" 
            v-on:click="choose(item.domainDeptID)">{{item.nodeDesc}}
            </li>
        </ul>
    </div>

</template>

<script>
export default {
  computed: {
      title(){
          return this.$store.state.title;
      },
      isHide(){
          return this.$store.state.comContractIsShow;
      },
      maxNum(){
           return this.$store.state.maxNum;
      },
      exceedMax(){
          return this.$store.getters.exceedMax;
      },
      commonPersons(){
           return this.$store.state.commonPersons;
      }
  },
  methods: {
      hideComPas(){
          this.$store.commit('CHANGE_COM_CONTRACT', false);
      },
      choose(id){
          
          if(this.exceedMax && this.maxNum !== 1) {
              alert('已达到可选择的最大值');
              return;
          }

          this.$store.commit('CHOOSE_BY_ID', id);
      }
  }
}
</script>

