<!-- src/components/ProductAdd.vue -->
<template>
  <div class="container mx-auto p-4">
    <div v-if="!isAuthenticated" class=" flex justify-items-center flex-col mb-6 text-center" >
      <h1 class="font-semibold text-xl leading-relaxed"  >
        You are not logged in
      </h1>
      <div class="flex justify-center  mb-6">
      <router-link to="/login" class="btn-primary">Login</router-link>
      <router-link to="/register" class="btn-primary ml-4">Register</router-link>
      </div>
    </div>
    <form v-if="isAuthenticated" @submit.prevent="addProduct" class="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Add Product</h2>
      <input
          v-model="name"
          placeholder="Product Name"
          class="w-full p-2 mb-4 border rounded"
          required
      />
      <textarea
          v-model="description"
          placeholder="Product Description"
          class="w-full p-2 mb-4 border rounded"
          required
      ></textarea>
      <input
          v-model="price"
          placeholder="Product Price"
          type="number"
          class="w-full p-2 mb-4 border rounded"
          required
      />
      <input
          v-model="imageURL"
          placeholder="Product Image URL"
          class="w-full p-2 mb-4 border rounded"
          required
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
  computed:{
    isAuthenticated(){
      return this.$store.state.token !== ''
    }

  },
  data() {
    return {
      name: '',
      description: '',
      price: '',
      imageURL: ''
    };
  },
  methods: {
    async addProduct() {
      try {
        await this.$store.dispatch('addProduct', {
          name: this.name,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL
        });
        this.$toast.open({
          message: 'Product added successfully!',
          type: 'success',
        });
        this.$router.push('/');
      } catch (error) {
        this.$toast.open({
          message: error?.response?.data || 'Failed to add product.',
          type: 'error',
        });
      }
    }
  }
};
</script>
