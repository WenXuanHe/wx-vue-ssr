<template>
    <ul class="weui_cells_access">
        <li v-for="depart in departList" :key='depart.domainDeptID' class="weui_cell">
            <a href="javascript:void(0);" @click="goNextDeptOrMember(depart.domainDeptID, depart.nodeDesc)">{{depart.nodeDesc}}</a>
            <div class="weui_cell_ft"></div>
        </li>
    </ul>
</template>


<script>
export default {
    props: ['departList'],

    watch:{
        '$route' (to, from) {
            if(!to.query.advance){
                 this.$store.dispatch('getDeptAndStaff', { p_id: to.params.p_id});
            }
        }
    },
    methods: {
        goNextDeptOrMember(id, nodeDesc) {
            var self = this;
            this.$store.dispatch('getDeptAndStaff', {
                p_id: id,
                success: function(data) {
                    if (data.filter(item => item.type === 2).length > 0) {
                        self.$router.push({ path: `/index/${id}`, query:{advance:true} });
                    } else {
                        self.$router.push({ path: `/selectStaff/${id}` });
                    }
                    self.$store.commit('INSERT_DEPART_NAMES', nodeDesc);
                }
            });
        }
    }
}
</script>
