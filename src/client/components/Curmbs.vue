<template>
    <!-- 面包屑导航 -->
    <div class="s-nav s-nav-color" v-if="departNames.length">
        <a class="superior" href="javascript:void(0);" v-for="(item,i) in departNames" :key="i" @click="goBack(i, item.foreNodeCode)">{{item.nodeDesc}}></a>
        <!-- <span class="curreny">{{current}}</span> -->
    </div>
</template>

<script>
export default {

    computed: {
        departNames() {
            return this.$store.state.departNames;
        }
    },
    methods: {
        goBack(i, p_id) {
            //在返回时，调用数据
            let len = this.departNames.length;
            this.$router.go(i - len);
            this.$store.dispatch('getDeptAndStaff', { p_id: p_id });
            this.$store.commit('DELETE_DEPART_NAMES', i);
        }
    }
}
</script>
