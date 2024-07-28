<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button @click="moveToAbout">버튼</button>
  </div>
</template>

<script lang="ts" setup>
    function moveToAbout() {
      navigateTo("about")
    }
</script>

<style>

</style>