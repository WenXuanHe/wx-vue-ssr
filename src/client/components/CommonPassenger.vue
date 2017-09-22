<template>
    <div class="comPas">
        <com-pas-header 
            :classObject="classObject" 
            @clickEvent="hideComPas" 
            :title="title">
        </com-pas-header>

        <ul class="comPas_people pb20" v-show="!isHide">
            <li v-for="item in commonPersons" 
            :key='item.domainDeptID' 
            :class="{ 'choose': item.choosed}" 
            @click="choose(item.domainDeptID)">{{item.nodeDesc}} </li>
        </ul>
    </div>
</template>

<style>
@import '../styles/mixin.css';
.s-comPas-header {
    font-size: 18px;
    @mixin h50;
}

.s-comPas-header-color {
    background: var(--header-c);
    border-bottom: 1px solid #DDDDDD;
}
</style>

<script>
import ComPasHeader from './Header';

export default {
    computed: {
        title() {
            return "常用" + this.$store.state.title;
        },
        isHide() {
            return this.$store.state.comContractIsShow;
        },
        maxNum() {
            return this.$store.state.maxNum;
        },
        exceedMax() {
            return this.$store.getters.exceedMax;
        },
        commonPersons() {
            return this.$store.state.commonPersons;
        }
    },
    methods: {
        hideComPas() {
            alert('12');
            this.$store.commit('CHANGE_COM_CONTRACT', false);
        },
        choose(id) {

            if (this.exceedMax && this.maxNum !== 1) {
                alert('已达到可选择的最大值');
                return;
            }

            this.$store.commit('CHOOSE_BY_ID', id);
        }
    },
    data: function(){
        return {
            classObject: {
                's-comPas-header':true,
                's-comPas-header-color': true
            },
        }
    },
    components: {
        ComPasHeader
    }
}
</script>

