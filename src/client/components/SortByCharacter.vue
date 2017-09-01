<template>
    <div>
        <p class="memberTree_title">按字母排序</p>
        <div class="sortByABC">
            <ul>
                <li v-for="item in characters" v-on:click="scrollToCharacter(item)" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        // [A, B, C, D, E, ...]
        characters(){
            return this.$store.getters.characters
        }
    },

    methods: {
        //滾動到字母所在之处
        scrollToCharacter(item){

        }
    }

}
</script>

