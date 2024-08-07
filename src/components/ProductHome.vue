<template>
  <div class="container mx-auto p-4">
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
        <p class="text-lg font-semibold mb-4">${{ product.price }}</p>
        <img :src="product.imageURL" alt="Product Image" class="w-full h-40 object-cover"/>
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
