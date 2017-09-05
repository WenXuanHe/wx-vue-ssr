<template>
    <div>
        <change-classes v-show="isContract"></change-classes>
        <common-passenger v-show="needCommPass" :com-pass="comPass"></common-passenger>
        <dept-tree :member-tree="memberTree" :outer-linkman="outerLinkman"></dept-tree>
        <div style="margin-bottom:50px;"></div>
    </div>
</template>

<script>


// 因公 默认页面
import ChangeClasses from '../components/ChangeClasses';


export default {
  
}
</script>
