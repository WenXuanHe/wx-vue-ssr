<template>
  <div class="deptTree">
		<dept-tree-title></dept-tree-title>
        <dept-tree-body :member-tree = "departList"></dept-tree-body>
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

