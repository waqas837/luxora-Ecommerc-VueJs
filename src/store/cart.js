import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.length,
  },
  actions: {
    addToCart(item) {
      const existingItem = this.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 }); // Ensure quantity is added
      }
    },
    updateQuantity(id, quantity) {
      const item = this.items.find((cartItem) => cartItem.id === id);
      if (item) item.quantity = quantity;
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
  },
});
