<template lang="pug">
//- v-container.d-flex.align-center.flex-column
//- v-row.mt-10(justify="space-around")
v-responsive.mx-auto(max-width="500")
  v-card.mt-10.pa-4(tonal, color="#fff", theme="light")
    v-row(align="center", justify="center")
      v-card-title.mt-5
        h1.headline Signin
    v-divider.mt-8
    div
      v-text-field(
        outline, type="text", 
        v-model="username", clearable,
      )
      v-text-field(outline, type="password", v-model="password", clearable)
</template>

<script setup>
import { useTheme } from 'vuetify';

// state
const username = useState('username', () => '');
const password = useState('password', () => '');

const theme = useTheme();
theme.name.value = 'my';
console.log('theme.name: ', theme.themes.value);

definePageMeta({
  layout: false,
});
</script>