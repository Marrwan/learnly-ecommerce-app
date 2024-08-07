<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="login" class="max-w-sm mx-auto bg-white p-6 rounded shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <input
          v-model="username"
          placeholder="Username"
          class="w-full p-2 mb-4 border rounded"
      />
      <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-2 mb-4 border rounded"
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
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => this.$router.push('/add-product'));
    }
  }
};
</script>
