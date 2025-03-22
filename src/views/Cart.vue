<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">🛒 Your Shopping Cart</h1>

    <div
      v-if="cartStore.items.length > 0"
      class="bg-white p-6 rounded-lg shadow-lg"
    >
      <div
        v-for="(item, index) in cartStore.items"
        :key="item.id"
        class="cart-item"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="w-20 h-20 object-cover rounded-lg shadow-md"
        />

        <div class="flex-1">
          <h2 class="text-lg font-semibold">{{ item.name }}</h2>
          <p class="text-gray-600">${{ item.price }}</p>

          <!-- Quantity Control -->
          <div class="flex items-center space-x-3 mt-2">
            <button @click="decreaseQuantity(item)" class="qty-btn">-</button>
            <span class="text-lg font-semibold">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="qty-btn">+</button>
          </div>
        </div>

        <!-- Remove Button -->
        <button @click="removeFromCart(index)" class="remove-btn">✖</button>
      </div>

      <!-- Cart Summary -->
      <div class="mt-6 border-t pt-4">
        <h2 class="text-xl font-bold text-gray-800">Cart Summary</h2>
        <p class="text-lg font-semibold text-orange-500">
          Total: ${{ cartTotal }}
        </p>

        <!-- Checkout Buttons -->
        <div class="mt-4 flex space-x-4">
          <button
            @click="checkout('stripe')"
            class="checkout-btn bg-orange-500 hover:bg-orange-600"
          >
            Pay with Stripe
          </button>
          <button
            @click="checkout('paypal')"
            class="checkout-btn bg-yellow-500 hover:bg-yellow-600 text-gray-900"
          >
            Pay with PayPal
          </button>
        </div>
      </div>
    </div>

    <p v-else class="text-gray-500 text-center mt-12 text-xl">
      Your cart is empty. 🛍️
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../store/cart";
import { useToast } from "vue-toastification";

const cartStore = useCartStore();
const toast = useToast();

const cartTotal = computed(() => {
  return cartStore.items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
});

const increaseQuantity = (item) => {
  cartStore.updateQuantity(item.id, item.quantity + 1);
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1);
  }
};

const removeFromCart = (index) => {
  cartStore.removeFromCart(index);
  toast.warning("Item removed from cart.", {
    timeout: 3000,
    position: "top-right",
  });
};

const checkout = (method) => {
  toast.success(`Proceeding to checkout with ${method.toUpperCase()}...`);
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.qty-btn {
  background: #ff7700;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}

.qty-btn:hover {
  background: #ff9900;
}

.remove-btn {
  background: #ff4d4d;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 18px;
  transition: 0.3s ease-in-out;
}

.remove-btn:hover {
  background: #e60000;
}

.checkout-btn {
  padding: 10px 16px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
}
</style>
