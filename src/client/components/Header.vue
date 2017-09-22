<template>
    <header :class="classObject" @click="clickFun">
        <slot name="firstChild"></slot>
        <span>{{title}}</span>
    </header>
</template>


<script>

export default {
    props:['classObject', 'title'],

    methods: {
        clickFun(){
            this.$emit('clickEvent');
        }
    }
}
</script>
