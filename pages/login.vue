<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100"
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="password">Password</label>
          <input
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100"
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Enter your password"
          />
        </div>
        <span v-if="isLoading">Loading...</span>
        <span v-if="errorMsg" class="text-red-600">{{ errorMsg }}</span>
        <button
          class="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const url = 'https://reqres.in/api/login';

const isLoading = ref(false);
const errorMsg = ref(null)
const form = reactive({
  email: 'eve.holt@reqres.in',
  password:  'cityslicka'
})
async function onSubmit() {
  if(isLoading.value) return;

  isLoading.value = true;
  const {data, error} = await useFetch(url, {
    method: 'post',
    body: form
  });
  isLoading.value = false;
  if(error.value) {
    errorMsg.value = error.value.data.error;
    return;
  }
  const auth = useAuth();
  auth.value.isAuthenticated = true;
  navigateTo('/')

}
</script>

<style>

</style>