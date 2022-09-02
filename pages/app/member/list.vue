<template lang="pug">
div
  h1 Member List
  //- div(v-if="pending") Loading
  //- div(v-else)
  h1 data
  pre {{data}}
  h2 {{account}}
  input(v-model="account")
  h2 {{counter}}
  button(@click="counter++") +
  button(@click="counter--") -
  button(@click="showLazyValue") Click
  pre(v-if="showLazyData") {{lazyList}}
</template>

<script setup>
// firstInit
// const { data, pending, error, refresh } = await useAsyncData('yourSales', () => $fetch('https://mei-cha-shop-bbqkdcnkwa-de.a.run.app/v1/sale/%E6%89%8B%E5%B7%A5%E9%A3%84%E7%9C%89%E5%A4%A9%E5%90%8E%E7%B5%84'));
// const { data, pending, error, refresh } = await useData('yourSales', '/v1/sale/%E6%89%8B%E5%B7%A5%E9%A3%84%E7%9C%89%E5%A4%A9%E5%90%8E%E7%B5%84');

const data = await useLazyEffect('/v1/sale/%E6%89%8B%E5%B7%A5%E9%A3%84%E7%9C%89%E5%A4%A9%E5%90%8E%E7%B5%84');
// console.log('data2: ', data);

// const route = useRoute();
// console.log('route: ', route.fullPath);

// global func
// const nuxtApp = useNuxtApp();
// console.log(nuxtApp.$hello('namee'));

// Head
useHead({ title: 'MemberList | My App' });


// state
const lazyList =  useState('lazyList', () => {});
const showLazyData = useState('showLazyData', () => false);
const account = useState('account', () => 'yourAccount');
const counter = useState('counter', () => 100);

const counter3 = useCookie('counter3')
counter3.value = 1500;
counter.value = counter3;

// methods
const showLazyValue = async () => {
  const { data } = await useLazyEffect('/v1/sales');
  lazyList.value = data;
  showLazyData.value = true;
};

</script>