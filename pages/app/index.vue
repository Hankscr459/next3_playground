<template lang="pug">
v-container
  h1 Home
</template>

<script setup>
import { onMounted, onBeforeMount } from 'vue';

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

definePageMeta({
  layout: false,
});
</script>
