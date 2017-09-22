<template>
    <div>
        <!-- <change-classes></change-classes> -->
        <common-passenger></common-passenger>
        <curmbs></curmbs>  
        <department-list ></department-list>
    </div>
</template>

<script>
                  
// 因公 默认页面
import ChangeClasses from '$components/ChangeClasses.vue'
import CommonPassenger from '$components/CommonPassenger.vue'
import DepartmentList from '$components/DepartmentList.vue'
import Curmbs from '$components/Curmbs.vue'
import {asyncData} from '$utils/index'

export default {
  asyncData: asyncData,
  components: {  
      ChangeClasses, 
      CommonPassenger,
      DepartmentList,
      curmbs: Curmbs
  }
}
</script>
