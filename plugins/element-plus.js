import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus/dist/index.full';
// import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus);
  // nuxtApp.vueApp.use(ElementPlusIconsVue);
});