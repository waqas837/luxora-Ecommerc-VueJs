import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Signup from "@/views/Signup.vue";
import About from "@/views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/forgot-password", component: ForgotPassword },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
