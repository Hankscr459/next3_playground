<template lang="pug">
el-menu.el-menu-vertical-demo(
  default-active="1",
  :collapse="isCollapseMenu",
  background-color="var(--el-text-color-primary)",
  text-color="var(--el-color-white)"
  active-text-color="var(--el-color-warning-light-3)",
)
  el-sub-menu(index="1")
    template(#title)
      el-icon
        Avatar
      span 會員管理
    el-menu-group
      //- template(#title) 
      //-   span Group One
      //- el-menu-item-group(title="Group One")
      el-menu-item(index="1-1", @click="goToRoute('/app/member/list')") 會員清單
      el-menu-item(index="1-2", @click="goToRoute('/app/member/create')") 新增會員
    //- el-menu-item-group(title="Group Two")
    //-   el-menu-item(index="1-3") item Three
    el-sub-menu(index="1-4")
      template(#title)
        span 會員資料
      el-menu-item(index="1-4-1") item One
  el-menu-item(index="2", @click="goToRoute('/app/order/list')")
    el-icon
      Menu
    template( #title) 設定
</template>

<script setup>
import { useWindowSize } from 'vue-window-size';
import { Avatar, Menu } from '@element-plus/icons-vue';

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

// func
const goToRoute = (path) => {
  return navigateTo(path);
};

// const handleOpen = (key, keyPath) => {
//   console.log('handleOpen Key: ', key);
//   console.log('handleOpen keyPath: ', keyPath);
// };

// const handleClose = (key, keyPath) => {
//   console.log('handleClose key: ', key);
//   console.log('handleClose keyPath: ', keyPath);
// };
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>