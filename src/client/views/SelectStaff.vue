<template>
    <div class="allMember">
        <curmbs></curmbs>  
        <staff :Members="Members" :choosedPersons="choosedPersons"></staff>
    </div>
</template>

<script>

import { MapMembers } from '$utils'
import Staff from '$components/Staff.vue'
import Curmbs from '$components/Curmbs.vue'
import {asyncData} from '$utils/index'

export default {
    asyncData: asyncData,
    computed: {
        choosedPersons(){
            return this.$store.state.choosedPersons;
        },
        Members() {
            return this.$store.state.persons.filter(item => item.type === 1);
        },
        MapMembers(){
            return MapMembers(this.Members);
        }
    },
    components: {
        'staff': Staff,
        'curmbs': Curmbs
    }
}
</script>
