<template lang="pug">
h1 Signin Page
</template>

<script setup>

// state
const username = useState('username', () => '');
const password = useState('password', () => '');


definePageMeta({
  layout: false,
});
</script>