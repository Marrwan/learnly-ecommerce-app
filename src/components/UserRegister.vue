<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="register" class="max-w-sm mx-auto bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <input
          v-model="username"
          placeholder="Username"
          class="w-full p-2 mb-4 border rounded"
          required
      />
      <input
          v-model="email"
          placeholder="Email"
          type="email"
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
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        this.$toast.open({
          message: 'Registered successfully!',
          type: 'success',
        });
        this.$router.push('/login');
      } catch (error) {
        this.$toast.open({
          message: 'Registration failed. Please try again.',
          type: 'error',
        });
      }
    }
  }
};
</script>
