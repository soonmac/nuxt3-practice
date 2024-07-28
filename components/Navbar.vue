<template>
  <nav class="bg-purple-700 shadow-lg p-3 text-white text-lg flex justify-between">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/iphone">Iphones</NuxtLink>
    <div v-if="auth.isAuthenticated">

      <NuxtLink to="/profile">Profile</NuxtLink>
      <button class="ml-4" @click="logout()">logout</button>
    </div>

    <NuxtLink v-else to="/login">Login</NuxtLink>
    <p> Cart({{cart.length}})</p>
  </nav>
</template>

<script lang="ts" setup>
  const cart = useCart();
  const auth = useAuth();
  function logout() {
    auth.value.isAuthenticated = false;
  }
</script>

<style>

</style>