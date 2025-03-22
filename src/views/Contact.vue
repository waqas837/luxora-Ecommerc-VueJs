<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const sendMessage = (e) => {
  e.preventDefault();
  toast.warning("Thanks for Feedback!")
};
</script>
<template>
  <div class="container mx-auto p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-orange-500 text-center mb-6">
        Contact Us
      </h2>
      <p class="text-gray-600 text-center mb-6">
        Have questions? We'd love to hear from you! Fill out the form below, and
        we'll get back to you soon.
      </p>

      <form class="space-y-4">
        <div>
          <label class="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium">Message</label>
          <textarea
            rows="4"
            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
          @click="sendMessage"
        >
          Send Message
        </button>
      </form>

      <div class="mt-8 text-center">
        <p class="text-gray-600">Or reach us via:</p>
        <p class="text-lg font-semibold text-gray-800">
          Email: support@example.com
        </p>
        <p class="text-lg font-semibold text-gray-800">
          Phone: +1 (234) 567-890
        </p>
      </div>
    </div>
  </div>
</template>
