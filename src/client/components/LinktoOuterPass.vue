
<template>
    <div v-link="{path: '/toAddOuterPass'}" class="addPassengerLink">
        <span class="addPic"></span>添加{{title}}
    </div>
</template>

<script>

// 跳轉到添加外部乘客頁面
export default {
    computed: {
        title() {
            return this.$store.state.title
        }
    }
}
</script>
