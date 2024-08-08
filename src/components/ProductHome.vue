<!-- src/components/ProductHome.vue -->
<template>
  <div class="container mx-auto p-4 text-center">
    <h1 class="text-4xl font-bold mb-6">Welcome to Our E-commerce Platform</h1>

    <div v-if="!isAuthenticated" class="flex justify-center mb-6">
      <router-link to="/login" class="btn-primary">Login</router-link>
      <router-link to="/register" class="btn-primary ml-4">Register</router-link>
    </div>
    <input
        v-model="searchQuery"
        placeholder="Search products..."
        class="w-full p-2 mb-4 border rounded"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border rounded shadow-lg p-4 bg-white"
      >
        <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
        <p class="mb-2">{{ product.description }}</p>
        <p class="text-lg font-semibold mb-4">₦{{ product.price }}</p>
        <img :src="product.imageURL" alt="Product Image" class="w-full h-40 object-cover mb-4"/>
        <div class="flex items-center">
          <div class="bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center overflow-hidden">
            <img
                :src="product?.createdBy?.username === 'marrwan' ? require('@/assets/logo.png') : require('@/assets/default-avatar.png')"
                alt="Avatar"
                class="h-10 w-10 object-cover"
            />
          </div>
          <div class="ml-3">
            <p class="text-sm text-gray-600">Created By</p>
            <p class="text-lg font-semibold">{{ product?.createdBy?.username }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductHome',
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.token !== '';
    },
    filteredProducts() {
      return this.$store.state.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  created() {
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style scoped>
.btn-primary {
  background-color: #1D4ED8;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #2563EB;
}
</style>
