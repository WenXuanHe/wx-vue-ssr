<template>
  <div class="deptTree">
		<dept-title></dept-title>
    <dept-body></dept-body>
  </div>
</template>

<script>

import DepartTitle from '../components/DepartTitle.vue'
import DepartBody from '../components/DepartBody.vue'

export default {
  
  components:{
    "depart-title" : DepartTitle,
    "depart-body":DepartBody
  }
 
}
</script>

