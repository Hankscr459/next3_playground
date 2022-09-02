import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt';
import { createCommonJS } from 'mlly';
const { __dirname } = createCommonJS(import.meta.url);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'goToOrderList',
        path: '/',
        file: resolve(__dirname, 'pages/app/order/list.vue'),
      });
    }
  },

  app: {
    head: {
      title: 'My App',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    apiSecret: 'yoursecretkey',
    public: {
      apiBase: process.env.api,
    },
  },
  css: ['element-plus/dist/index.css'], 
  // build: {
  //   transpile: ['vuetify'],
  // },
  build: {
    transpile: ['element-plus'],
  },
  buildModules: ["nuxt-windicss"],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});

