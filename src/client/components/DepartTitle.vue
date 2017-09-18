<template>
  <div class="deptTree_companyName">
      <span class="companyDetailPic">
          <span class="companyDetailPicture"></span>
      </span>
      {{companyName}}
    </div>
</template>

<script>
export default {
  computed: {
      companyName(){
          return this.$store.state.root.companyName;
      }
  }
}
</script>

