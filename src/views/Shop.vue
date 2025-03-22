<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../store/cart";
import { useToast } from "vue-toastification";

const cartStore = useCartStore();
const searchQuery = ref("");
const selectedCategory = ref("");
const toast = useToast(); // Initialize toast
const products = ref([
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

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return (
      (selectedCategory.value === "" ||
        product.category === selectedCategory.value) &&
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const addToCart = (product) => {
  const itemInCart = cartStore.items.find((item) => item.id === product.id);
  if (itemInCart) {
    toast.success(`${product.name} added to cart!`);
  } else {
    cartStore.addToCart(product);
    toast.warning(`${product.name} is already in your cart!`);
  }
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-orange-500 text-center mb-6">
      Shop Our Products
    </h1>

    <div class="flex flex-col md:flex-row justify-between items-center mb-6">
      <input
        v-model="searchQuery"
        placeholder="Search products..."
        class="p-2 border rounded-lg w-full md:w-1/3 mb-4 md:mb-0"
      />

      <select
        v-model="selectedCategory"
        class="p-2 border rounded-lg w-full md:w-1/3"
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
        <option value="Bags">Bags</option>
      </select>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="product in filteredProducts"
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
          class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
select {
  border: 2px solid #f97316;
  outline: none;
}
</style>
