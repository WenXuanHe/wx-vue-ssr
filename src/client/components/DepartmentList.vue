<template>
    <div class="deptTree">
        <depart-header :classObject="classObject" :title="companyName"></depart-header>
        <depart-body></depart-body>
    </div>
</template>

<script>

import DepartHeader from './Header.vue';
import DepartBody from './DepartBody.vue'

export default {

    computed: {
        companyName() {
            return this.$store.state.root.companyName;
        }
    },
    components: {
        DepartHeader,
        DepartBody
    },

    data: function() {
        return {
            classObject: {
                's-comPas-header': true,
                's-comPas-header-color': true
            }
        }
    },

}
</script>

