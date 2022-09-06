<template lang="pug">
el-row
  el-col
    el-menu.el-menu-demo(
      mode="horizontal",
      :ellipsis="false",
      text-color="var(--el-color-white)",
      background-color="#545c64",
      active-text-color="#ffd04b",
    )
      img.navbar__logo-box(
        src="@/assets/images/logo.png",
      )
      .flex-grow
      el-sub-menu(index="1")
        template(#title)
          span
            el-icon
              UserFilled
        el-menu-item(index="1-1") 
          span 
            el-icon
              User
            span Edit profile
        el-menu-item(index="1-2")
          span 
            el-icon
              RefreshLeft
            span.test-color Logout
      el-menu-item(index="2") 
        span 
          el-icon 
            Setting
//- el-header(style="background-color: var(--el-color-primary-light-3);") Some *custom* layout Header
</template>

<script setup>
import { User, UserFilled, Setting, RefreshLeft } from '@element-plus/icons-vue';
</script>

<style>
.flex-grow {
  flex-grow: 1;
};
.navbar__logo-box {
  line-height: var(--el-menu-item-height); 
  max-height: var(--el-menu-base-level-padding);
  max-width: 3rem;
  max-height: 3rem;
  margin-left: 0.5rem;
  width: 100%;
  align-self: center;
};
</style>