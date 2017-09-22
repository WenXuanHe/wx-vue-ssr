<template>
    <ul class="weui_cells_access">
        <li v-for="depart in departList" :key='depart.domainDeptID' class="weui_cell weui_cell-color">
            <a href="javascript:void(0);" @click="goNextDeptOrMember(depart.domainDeptID, depart.nodeDesc, depart.foreNodeCode)">{{depart.nodeDesc}}</a>
        </li>
    </ul>
</template>

<style lang="postcss">

.weui_cell {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #DDDDDD;
}
.weui_cell-color{
    background: #ffffff;
}
.weui_cell::before {
    display: inline-block;
    content: "";
    width: 15px;
    height: 15px;
    border-left: 1px solid #DDDDDD;
    border-bottom: 1px solid #dddddd;
    margin: 0 5%;
}

.weui_cell a{
    color: #000000;
}
</style>

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
