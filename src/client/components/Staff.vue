<template>
    <div>
        <div class="memberTree" v-for="(value, key) in MapMembers" :key="key" style="position:relative">
            <div class="memberTree_title" v-if="value.length">{{key}}</div>
            <ul class="memberTree_ul">
                <li v-for="item in value"
                    :key="item.domainDeptID" 
                    :class="{ 'choose': choosedPersons.indexOf(item) > -1}" 
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
