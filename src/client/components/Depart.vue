<template>
    <ul class="weui_cells_access">
        <li v-for="depart in departList" :key='depart.domainDeptID' 
            class="weui_cell weui_cell-color" 
            @click="goNextDeptOrMember(depart.domainDeptID, depart.nodeDesc, depart.foreNodeCode)">
                <a href="javascript:void(0);">{{depart.nodeDesc}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['departList'],
    methods: {
        goNextDeptOrMember(id, nodeDesc, p_id) {
            var self = this;
            //先判断以当前id为父id下是否还存在部门，如存在，则调用自身组件，没有部门，跳转到选择员工界面
            this.$store.dispatch('getDeptAndStaff', {
                p_id: id,
                success: function(data) {
                    if (data.filter(item => item.type === 2).length > 0) {
                        self.$router.push({ path: `/index/${id}` });
                    } else {
                        self.$router.push({ path: `/selectStaff/${id}` });
                    }
                    // 添加路径时，将父id也添加
                    self.$store.commit('INSERT_DEPART_NAMES', {
                        foreNodeCode: p_id,
                        nodeDesc: nodeDesc
                    });
                }
            });
        }
    }
}
</script>
