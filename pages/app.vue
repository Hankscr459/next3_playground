<template lang="pug">
NuxtLayout(:name="layout")
  NuxtPage
</template>

<script setup>

// state
const layout = false;

// global func
const nuxtApp = useNuxtApp();
nuxtApp.provide('hello', (name) => `Hello ${name}`);
</script>
