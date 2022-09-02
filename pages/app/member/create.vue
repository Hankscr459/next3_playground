<template lang="pug">
div
  h1 Create Member
</template>

<script setup>
definePageMeta({
  layout: 'custom',
  middleware: 'auth',
});
</script>