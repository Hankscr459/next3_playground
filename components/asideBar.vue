<template lang="pug">
el-menu.el-menu-vertical-demo(
  default-active="1",
  :collapse="isCollapseMenu",
)
  el-sub-menu(index="1")
    template(#title)
      el-icon
        Location
      span Nacigator One
    el-menu-group
      template(#title)
        span Group One
      el-menu-item-group(title="Group One")
        el-menu-item(index="1-1") item One
        el-menu-item(index="1-2") item Two
    el-menu-item-group(title="Group Two")
      el-menu-item(index="1-3") item Three
    el-sub-menu(index="1-4")
      template(#title)
        span item Four
      el-menu-item(index="1-4-1") item One
  el-menu-item(index="2")
    el-icon
      Menu
    template( #title) Navigator Two
</template>

<script setup>
import { useWindowSize } from 'vue-window-size';
import { Location, Menu } from '@element-plus/icons-vue';

// state
const { width } = useWindowSize();
const isCollapseMenu = useState('isCollapseMenu', () => false);

watch(() => width.value, () => {
  if (width.value <= 900) {
    isCollapseMenu.value = true;
  } else {
    isCollapseMenu.value = false;
  }
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>