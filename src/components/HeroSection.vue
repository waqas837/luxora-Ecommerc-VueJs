<script setup>
import bannerImage from "@/assets/banner.jpg"; // Corrected image path
import { ref } from "vue";
import { useCartStore } from "../store/cart";
import { useToast } from "vue-toastification"; // Import Vue Toastification

const cartStore = useCartStore();
const toast = useToast(); // Initialize toast
const featuredProducts = ref([
  {
    id: 1,
    name: "Stylish Jacket",
    price: 59.99,
    image: new URL("@/assets/jacket.jpeg", import.meta.url).href,
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    image: new URL("@/assets/shoes.jpg", import.meta.url).href,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 99.99,
    image: new URL("@/assets/watch.jpg", import.meta.url).href,
  },
  {
    id: 4,
    name: "Leather Bag",
    price: 89.99,
    image: new URL("@/assets/bag.webp", import.meta.url).href,
  },
]);

const addToCart = (product) => {
  const added = cartStore.addToCart(product);
  if (added) {
    toast.success(`${product.name} added to cart!`);
  } else {
    toast.warning(`${product.name} is already in your cart!`);
  }
};
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section
      class="relative hero h-[500px] flex items-center justify-center bg-cover bg-center text-white"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative text-center text-white p-10 rounded-lg">
        <h1 class="text-5xl font-bold">Discover the Best Deals</h1>
        <p class="mt-4 text-lg">Shop the latest trends with exclusive offers</p>
        <router-link
          to="/shop"
          class="mt-6 inline-block bg-orange-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
        >
          Shop Now
        </router-link>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Featured Products</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        >
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-white p-4 rounded-lg shadow-lg"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-40 object-cover rounded-md"
            />
            <h3 class="mt-4 text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">${{ product.price }}</p>
            <button
              @click="addToCart(product)"
              class="mt-4 bg-orange-400 text-gray-900 px-4 py-2 rounded-md hover:bg-orange-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
