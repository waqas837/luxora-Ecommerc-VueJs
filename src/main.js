import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

let app = createApp(App);
let pinia = createPinia();
app.use(pinia);
app.use(Toast);
app.use(router);
app.mount("#app");
