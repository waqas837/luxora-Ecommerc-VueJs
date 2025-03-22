<template>
  <nav class="navbar-wrapper">
    <!-- Gradient Overlay -->
    <div class="navbar-gradient"></div>

    <div class="navbar-container">
      <!-- Logo Area -->
      <router-link to="/" class="logo-container">
        <img src="@/assets/logo.jpeg" alt="MyShop Logo" class="logo-image" />
      </router-link>

      <!-- Desktop Navigation Links -->
      <ul class="desktop-nav">
        <li v-for="(item, index) in navItems" :key="index" class="nav-item">
          <router-link :to="item.path" class="nav-link">
            {{ item.name }}
            <span class="link-underline"></span>
          </router-link>
        </li>
      </ul>

      <!-- Desktop Search Bar -->
      <div class="search-container">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Search products..."
          class="search-input"
        />
        <button @click="handleSearch" class="search-button">
          <SearchIcon class="w-5 h-5" />
        </button>
      </div>

      <!-- Desktop Cart & Login -->
      <div class="desktop-actions">
        <router-link to="/cart" class="cart-link">
          <ShoppingCartIcon class="cart-icon" />
          <span v-if="cartStore.itemCount > 0" class="cart-badge">
            {{ cartStore.itemCount }}
          </span>
        </router-link>

        <button @click="handleLogin" class="login-button">
          <span>Login</span>
        </button>
      </div>

      <!-- Mobile Actions -->
      <div class="mobile-actions">
        <!-- Mobile Cart Icon -->
        <router-link to="/cart" class="cart-link">
          <ShoppingCartIcon class="cart-icon" />
          <span v-if="cartStore.itemCount > 0" class="cart-badge">
            {{ cartStore.itemCount }}
          </span>
        </router-link>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMobileMenu"
          class="menu-toggle"
          aria-label="Toggle menu"
        >
          <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (Fixed positioning to ensure it shows correctly) -->
    <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
      <!-- Mobile Search Bar -->
      <div class="mobile-search">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Search products..."
          class="search-input"
        />
        <button @click="handleSearch" class="search-button">
          <SearchIcon class="w-5 h-5" />
        </button>
      </div>

      <ul class="mobile-nav">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="mobile-nav-item"
        >
          <router-link
            :to="item.path"
            class="mobile-nav-link"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <button @click="handleLogin" class="mobile-login-button">
            Login
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../store/cart";
import { useRouter } from "vue-router";
import { ShoppingCartIcon, SearchIcon } from "lucide-vue-next";

const cartStore = useCartStore();
const router = useRouter();
const searchQuery = ref("");
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const handleLogin = () => {
  router.push("/login");
};

const handleSearch = () => {
  console.log("Searching for:", searchQuery.value);
  // Emit or update product list based on searchQuery
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // Prevent scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};
</script>

<style scoped>
/* Main Navbar Styling */
.navbar-wrapper {
  position: relative;
  overflow: visible; /* Changed from hidden to allow the menu to expand outside */
  background-color: #1a1d24;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(26, 29, 36, 0.95) 0%,
    rgba(40, 44, 52, 0.9) 100%
  );
  z-index: -1;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Logo Styling */
.logo-container {
  padding: 0.25rem;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-image {
  height: 3rem;
  width: auto;
  filter: drop-shadow(0 0 5px rgba(255, 165, 0, 0.3));
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-item {
  position: relative;
}

.nav-link {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e2e4e7;
  padding: 0.5rem 0.25rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f59e0b;
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f59e0b;
  transition: width 0.3s ease;
}

.nav-link:hover .link-underline {
  width: 100%;
}

/* Search Bar Styling */
.search-container {
  position: relative;
  width: 33%;
  display: none;
}

@media (min-width: 768px) {
  .search-container {
    display: block;
  }
}

.search-input {
  width: 100%;
  padding: 0.65rem 2.5rem 0.65rem 1rem;
  border: 1px solid rgba(156, 163, 175, 0.2);
  border-radius: 50px;
  background-color: rgba(55, 65, 81, 0.2);
  color: #fff;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.search-input:focus {
  background-color: rgba(55, 65, 81, 0.4);
  border-color: rgba(245, 158, 11, 0.5);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
  outline: none;
}

.search-input::placeholder {
  color: rgba(209, 213, 219, 0.5);
  font-style: italic;
}

.search-button {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #d1d5db;
  transition: color 0.3s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  color: #f59e0b;
}

/* Desktop Actions */
.desktop-actions {
  display: none;
  align-items: center;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .desktop-actions {
    display: flex;
  }
}

.cart-link {
  position: relative;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.cart-link:hover {
  transform: scale(1.1);
}

.cart-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #f59e0b;
}

.cart-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.65rem;
  font-weight: 600;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1d24;
}

.login-button {
  background-color: transparent;
  border: 2px solid #f59e0b;
  color: #f59e0b;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.login-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #f59e0b;
  transition: width 0.3s ease;
  z-index: -1;
}

.login-button:hover {
  color: #1a1d24;
}

.login-button:hover::before {
  width: 100%;
}

/* Mobile Actions */
.mobile-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .mobile-actions {
    display: none;
  }
}

/* Hamburger Menu Toggle - Improved */
.menu-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #f59e0b;
  border-radius: 4px;
  transition: all 0.3s ease;
}

/* Hamburger animation */
.hamburger.is-active .hamburger-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu - Fixed positioning */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #1f2937;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 50;
  padding: 1rem;

  /* Hide by default with transform */
  transform: translateY(-100%);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.mobile-menu-open {
  transform: translateY(0);
  opacity: 1;
  max-height: 500px; /* Arbitrary large value to ensure content fits */
}

.mobile-search {
  position: relative;
  margin-bottom: 1rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.mobile-nav-item {
  width: 100%;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 0.5rem;
  color: #e2e4e7;
  font-weight: 500;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: #f59e0b;
  background-color: rgba(245, 158, 11, 0.1);
  border-left-color: #f59e0b;
  padding-left: 1rem;
}

.mobile-login-button {
  width: 100%;
  background-color: #f59e0b;
  color: #1a1d24;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 0.5rem;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.mobile-login-button:hover {
  background-color: #e9950a;
  transform: translateY(-2px);
}
</style>
