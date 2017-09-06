<template>
    <ul class="weui_cells_access">
        <li v-for="depart in departList" :key='depart.domainDeptID' class="weui_cell">
            <a href="javascript:void(0);" v-on:click="goNextDeptOrMember(depart.domainDeptID)">{{depart.nodeDesc}}</a>
            <div class="weui_cell_ft"></div>
        </li>
    </ul>
</template>


<script>
export default {
    //type = 1的数据加入未分配字段
    computed: {
        departList() {
            return this.$store.state.persons;
        }
    },
    methods: {
        goNextDeptOrMember(id){
            //异步调数据
            this.$store.dispatch('getDeptAndStaff', id);
        }
    }
}
</script>
