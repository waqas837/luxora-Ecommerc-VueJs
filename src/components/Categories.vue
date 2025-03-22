<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Shop by Category</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        >
          <img
            :src="category.image"
            :alt="category.name"
            class="w-24 h-24 object-cover rounded-md"
          />
          <h3 class="mt-4 font-semibold text-lg">{{ category.name }}</h3>
          <router-link
            :to="category.link"
            class="mt-2 text-orange-500 hover:underline"
            >Shop Now</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    name: "Men's Fashion",
    image: new URL("@/assets/men.jpg", import.meta.url).href,
    link: "/shop?category=men",
  },
  {
    id: 2,
    name: "Women's Fashion",
    image: new URL("@/assets/lady.webp", import.meta.url).href,
    link: "/shop?category=women",
  },
  {
    id: 3,
    name: "Accessories",
    image: new URL("@/assets/acc.jpg", import.meta.url).href,
    link: "/shop?category=accessories",
  },
  {
    id: 4,
    name: "Shoes",
    image: new URL("@/assets/shoes.jpg", import.meta.url).href,
    link: "/shop?category=shoes",
  },
]);
</script>
