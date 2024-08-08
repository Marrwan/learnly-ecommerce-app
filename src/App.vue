<!--App.vue-->
<template>

  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <nav class="bg-gray-800 p-4 text-white shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex space-x-4">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link v-if="!isAuthenticated" to="/login" class="nav-link">Login</router-link>
          <router-link v-if="!isAuthenticated" to="/register" class="nav-link">Register</router-link>
          <router-link v-if="isAuthenticated" to="/add-product" class="nav-link">Add Product</router-link>
        </div>
        <div v-if="isAuthenticated" class="flex items-center">
          <span>Welcome, {{ user.username || user.email }}</span>
          <button @click="logout" class="ml-4 btn-logout">Logout</button>
        </div>
      </div>
    </nav>
    <main class="flex-grow container mx-auto p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      return this.$store.state.token !== '';
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.commit('SET_USER', null);
      this.$store.commit('SET_TOKEN', '');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
@import "assets/tailwind.css";
@import "assets/styles.css";

.nav-link {
  @apply text-white hover:text-gray-300 transition duration-300;
}

.btn-logout {
  @apply bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300;
}
</style>
