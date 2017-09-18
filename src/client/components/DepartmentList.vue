<template>
  <div class="deptTree">
		<depart-title></depart-title>
    <depart-body></depart-body>
  </div>
</template>

<script>

import DepartTitle from './DepartTitle.vue'
import DepartBody from './DepartBody.vue'

export default {
  
  components:{
    "depart-title" : DepartTitle,
    "depart-body":DepartBody
  }
 
}
</script>

