<template>
    <section class="py-12 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            class="bg-gray-100 p-6 rounded-lg shadow-md">
            <p class="text-gray-700 italic">"{{ testimonial.message }}"</p>
            <h3 class="mt-4 font-bold text-orange-500">{{ testimonial.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const testimonials = ref([
    { name: "Sarah L.", message: "Amazing quality and fast shipping!" },
    { name: "John D.", message: "Love the variety, I keep coming back for more." },
    { name: "Emma R.", message: "Great customer service and smooth checkout." },
  ]);
  </script>
  