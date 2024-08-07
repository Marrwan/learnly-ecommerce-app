<!-- src/App.vue -->
<template>
  <div id="app">
    <nav class="bg-gray-800 p-4 text-white">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/login" class="mr-4">Login</router-link>
      <router-link to="/add-product" class="mr-4">Add Product</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add any global styles here */
</style>
