<template>
    <div>
        <div class="s-staff" v-for="(value, key) in MapMembers" :key="key" style="position:relative">
            <div class="s-staff-title" v-if="value.length">{{key}}</div>
            <ul class="s-staff-list">
                <li v-for="item in value"
                    :key="item.domainDeptID" 
                    class="s-staff-color" :class="{ 'choose': choosedPersons.indexOf(item) > -1}" 
                    @click="choosePassenger(item, $event)">
                    {{item.nodeDesc}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import {MapMembers} from '$utils/index'

export default {

    props: ['Members', 'choosedPersons'],
    computed: {
        MapMembers: function() {
            return MapMembers(this.Members);
        }
    },
    methods:{
        choosePassenger(item, e){
            if(e.target.className.indexOf('choose') > -1){
                this.$store.commit('UNCHOOSE_BY_INFO', item);
            }else{
                this.$store.commit('CHOOSE_BY_INFO', item);
            }
        }
    }
}
</script>
