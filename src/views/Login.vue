<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6 text-orange-500">
        Login to Your Account
      </h2>
      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-400 transition"
        >
          Login
        </button>
      </form>

      <!-- Register & Forgot Password Links -->
      <div class="mt-4 text-center">
        <router-link to="/signup" class="text-orange-400 hover:underline"
          >Create an account</router-link
        >
        <span class="mx-2">|</span>
        <router-link
          to="/forgot-password"
          class="text-orange-400 hover:underline"
          >Forgot password?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = () => {
  console.log("Logging in with", email.value, password.value);
  // Implement authentication logic here
  router.push("/dashboard");
};
</script>
