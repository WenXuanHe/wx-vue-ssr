<template>
    <div class="right-position">
        <ul>
            <li v-for="key in keys" :key="key" @click="pointTo(key)">
                <a href="javascript:void(0);">{{key}}</a>
            </li>
        </ul>
    </div>
</template>

<script>

import {MapMembers} from '$utils/index'

export default {

  props:['MapMembers'],
  computed:{
      keys(){
          return Object.keys(this.MapMembers);
      }
  },
  methods: {
      pointTo: function(key){

      }
  }
}
</script>

