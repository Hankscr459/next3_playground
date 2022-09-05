<template lang="pug">
div
  h1 Orders List
  pre {{config}}
  MyButton
</template>

<script setup>
const config = useRuntimeConfig()
// console.log('Runtime config:', config);
// console.log('API secret:', config.apiSecret);
if (config.apiSecret === 'yoursecretkey') {
  console.log('pass');
}
definePageMeta({
  layout: 'custom',
});
</script>