<template>
  
  <div  class="comPas">
        <div class="comPas_title" v-on:click="hideComPas">
            <span class="comPasPic">
                <span class="comPasPicture" v-bind:class="{'comPasPictureRight': isHide}"></span>
                </span>常用{{title}}
            </div>
        <ul class="comPas_people pb20" v-show="!isHide">
           <li v-for="item in comPass" 
            v-bind:key='item.KeyID'  
            v-bind:class="{ 'choose': item.choosed, 'white':isPrivate}" 
            v-on:click="choose(item.KeyID, $event)">{{item.PassengerNameCh}}
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
      isPrivate(){
           return this.$store.state.isPrivate;
      },
      maxNum(){
           return this.$store.state.maxNum;
      },
      exceedMax(){
          return this.$store.getters.exceedMax;
      }
  },
  methods: {
      hideComPas(){
          this.$store.commit('CHANGE_COM_CONTRACT', false);
      },
      choose(id, e){
          if(maxNum === 1){
              return '';
          }
          if(this.exceedMax) {
              alert('已达到可选择的最大值');
              return;
          }
      }
  }
}
</script>

