<template>
    <div class="">
        <depart :departList="departList"></depart>
        <staff :Members="staffList" :choosedPersons="choosedPersons" v-if="hasStaff"></staff>
    </div>
   
</template>


<script>
import Staff from './Staff.vue'
import Depart from './Depart.vue'

export default {
    //type = 1的数据加入未分配字段
    computed: {
        choosedPersons(){
            return this.$store.state.choosedPersons;
        },
        departList() {
            return this.$store.state.persons.filter(item => item.type===2);
        },
        staffList() {
            return this.$store.state.persons.filter(item => item.type===1);
        },
        hasDepart(){
            return this.departList.length;
        },
        hasStaff(){
            return this.staffList.length;
        }
    },
    components: {
        'staff': Staff,
        'depart': Depart
    }
    
}
</script>
