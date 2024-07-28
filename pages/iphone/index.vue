<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <NuxtLink v-for="iphone in iphones" :key="iphone" :to="`/iphone/${iphone}`" class="shadow-lg border rounded-lg text-center">
      <h1>Iphone 12</h1>
      <div class="flex justify-center">

        <img width="200" :src="`/images/${iphone}.jpg`" alt="iphone_img" >
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  useHead({
    title:"Nuxt3 - Iphones"
  });



  const {data} = useFetch("/iphones");
  const iphones = data;
</script>

<style>

</style>