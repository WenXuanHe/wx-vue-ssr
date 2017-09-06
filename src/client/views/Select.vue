<template>
    <div>
        <change-classes></change-classes>
        <common-passenger></common-passenger>
        <department-list ></department-list>
        <div style="margin-bottom:50px;"></div>
    </div>
</template>

<script>

import axios from 'axios';
import actions from '../store/actions'
// 因公 默认页面
import ChangeClasses from '../components/ChangeClasses.vue';
import CommonPassenger from '../components/CommonPassenger.vue';
import DepartmentList from '../components/DepartmentList.vue';

export default {
  asyncData: function({store, router}){
    //   return Promise.all([
    //       actions.getDeptAndStaff({commit: store.commit}),
    //       actions.getCompanyInfo({commit: store.commit})
    //   ])
    return axios.post('http://localhost:3000/apis/getDeptAndStaff').then((Persons) => {
        // Persons.forEach(function(elem) {
        //     if(elem.type === 1){
        //         elem.character = toUpperCase(getCharacter.makeBy(elem.nodeDesc));
        //     }
        // });
        store.commit('INJECT_PERSONS', Persons);
    })
  },
  components: {
      ChangeClasses,
      CommonPassenger,
      DepartmentList
  }
}
</script>
