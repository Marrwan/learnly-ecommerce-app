<!-- src/components/UserLogin.vue -->
<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="login" class="max-w-sm mx-auto bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <input
          v-model="username"
          placeholder="Username"
          class="w-full p-2 mb-4 border rounded"
          required
      />
      <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 mb-4 border rounded"
          required
      />
      <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        });
        this.$toast.open({
          message: 'Logged in successfully!',
          type: 'success',
        });
        this.$router.push('/add-product');
      } catch (error) {
        this.$toast.open({
          message: 'Login failed. Please check your credentials.',
          type: 'error',
        });
      }
    }
  }
};
</script>
