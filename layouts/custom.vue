<template lang="pug">
div(ref="test")
  CustomHeader
  el-container(style="height: 100vh")
    aside-bar
    el-main
      slot
  CustomFooter
</template>
<script setup>

</script>