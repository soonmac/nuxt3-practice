<template>
  <div>
    <Head>
      <Title>Nuxt 3 - Iphone {{ name }}</Title>
    </Head>
    </div>
  <div>
    iphone {{ name }}
    <button class="p-3 bg-indigo-400 text-white rounded-md mt-5 w-48" @click="addToCart">
      <span v-if="isInCart()">Remove from cart</span>
      <span v-else>buy now</span>


    </button>
  </div>
</template>

<script lang="ts" setup>
const cart = useCart();
const router = useRoute()
  const name = computed(()=> {
    return router.params.name
  })

  const fullname = computed(()=> {
    return `iphone-${router.params.name}`;
  })

function isInCart() {
  return !!cart.value.find(ct => ct.name === fullname.value);
}

  function addToCart() {
    if(!isInCart()) {
      cart.value.push({
        name:fullname.value,
      })
    } else {
      cart.value = cart.value.filter(ct => ct.name !== fullname.value)
    }
  }
</script>

<style>

</style>