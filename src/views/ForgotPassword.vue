<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-4 text-orange-500">Reset Your Password</h2>

    <form @submit.prevent="handleReset">
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          v-model="email"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div class="text-sm mb-4">
        Remembered?
        <router-link to="/login" class="text-orange-500">Login</router-link>
      </div>

      <button
        type="submit"
        class="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Send Reset Link
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const handleReset = () => {
  console.log("Sending reset link to:", email.value);
};
</script>
