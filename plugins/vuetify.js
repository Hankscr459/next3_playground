// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        my: {
          colors: {
            background: '#2196F3',
            surface: '#2196F3',
            primary: "#00bcd4",
            secondary: "#8bc34a",
            accent: "#3f51b5",
            error: "#e91e63",
            warning: "#ffeb3b",
            info: "#2196f3",
            success: "#4caf50",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});