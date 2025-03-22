<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & About -->
        <div>
          <h2 class="text-2xl font-bold text-orange-500">TrendCraftX</h2>
          <p class="mt-4 text-gray-400">
            Your one-stop shop for the latest trends. Quality products, best
            prices, and fast shipping.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-orange-500">Quick Links</h3>
          <ul class="mt-4 space-y-2">
            <li>
              <router-link to="/" class="hover:text-orange-400"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/shop" class="hover:text-orange-400"
                >Shop</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="hover:text-orange-400"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="hover:text-orange-400"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Customer Support -->
        <div>
          <h3 class="text-lg font-semibold text-orange-500">
            Customer Support
          </h3>
          <ul class="mt-4 space-y-2">
            <li>
              <router-link to="/faq" class="hover:text-orange-400"
                >FAQs</router-link
              >
            </li>
            <li>
              <router-link to="/returns" class="hover:text-orange-400"
                >Returns & Refunds</router-link
              >
            </li>
            <li>
              <router-link to="/shipping" class="hover:text-orange-400"
                >Shipping Info</router-link
              >
            </li>
            <li>
              <router-link to="/privacy-policy" class="hover:text-orange-400"
                >Privacy Policy</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-orange-500">
            Subscribe to Our Newsletter
          </h3>
          <p class="text-gray-400 mt-2">
            Get updates on new products & exclusive offers.
          </p>
          <div class="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              class="p-3 rounded-l-md text-gray-900 w-full focus:outline-none"
            />
            <button
              class="bg-orange-500 px-5 py-3 rounded-r-md font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Social Media & Copyright -->
      <div
        class="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6"
      >
        <p class="text-gray-400 text-sm">
          © 2025 TrendCraftX. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-orange-400 text-gray-400"
            ><i class="fab fa-facebook text-xl"></i
          ></a>
          <a href="#" class="hover:text-orange-400 text-gray-400"
            ><i class="fab fa-instagram text-xl"></i
          ></a>
          <a href="#" class="hover:text-orange-400 text-gray-400"
            ><i class="fab fa-twitter text-xl"></i
          ></a>
          <a href="#" class="hover:text-orange-400 text-gray-400"
            ><i class="fab fa-youtube text-xl"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>
