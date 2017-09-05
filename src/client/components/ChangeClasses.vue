<template>
  <div class="classList">
        <ul>
            <li class="comContract" v-on:click="showComContract">
                <p class="comContractPic"></p>
                <p>常用联系人</p>
            </li>
            <li class="companyAddress" v-on:click="hideComContract">
                <p class="companyAddressPic"></p>
                <p>企业通讯录</p>
            </li>
            <li class="address">
                <p class="addressPic"></p>
                <p>手机通讯录</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  methods: {
      showComContract (){
          this.$store.commit('CHANGE_COM_CONTRACT', true);
      },
      hideComContract() {
          this.$store.commit('CHANGE_COM_CONTRACT', false);
      }
  }
}
</script>
