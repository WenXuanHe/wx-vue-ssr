<template>
    <div>
        <change-classes></change-classes>
        <common-passenger></common-passenger>
        <curmbs></curmbs>  
        <department-list ></department-list>
    </div>
</template>

<script>

import actions from '../store/actions'                   
// 因公 默认页面
import ChangeClasses from '../components/ChangeClasses.vue';
import CommonPassenger from '../components/CommonPassenger.vue';
import DepartmentList from '../components/DepartmentList.vue';
import Curmbs from '../components/Curmbs.vue'

export default {
  asyncData: function({store, router}){
      return Promise.all([
          actions.getDeptAndStaff({commit: store.commit}, {p_id: router.params.p_id}),
          actions.getCommonPassengerList({commit: store.commit}),
          actions.getDepartNames({commit: store.commit}, router.params.p_id),
          actions.getCompanyInfo({commit: store.commit})
      ]);
  },
  components: {  
      ChangeClasses, 
      CommonPassenger,
      DepartmentList,
      curmbs: Curmbs
  }
}
</script>
