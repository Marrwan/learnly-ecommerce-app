<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="addProduct" class="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Add Product</h2>
      <input
          v-model="name"
          placeholder="Product Name"
          class="w-full p-2 mb-4 border rounded"
      />
      <textarea
          v-model="description"
          placeholder="Product Description"
          class="w-full p-2 mb-4 border rounded"
      ></textarea>
      <input
          v-model="price"
          placeholder="Product Price"
          class="w-full p-2 mb-4 border rounded"
      />
      <input
          v-model="imageURL"
          placeholder="Product Image URL"
          class="w-full p-2 mb-4 border rounded"
      />
      <button
          type="submit"
          class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add Product
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductAdd',
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageURL: ''
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch('addProduct', {
        name: this.name,
        description: this.description,
        price: this.price,
        imageURL: this.imageURL
      }).then(() => this.$router.push('/'));
    }
  }
};
</script>
