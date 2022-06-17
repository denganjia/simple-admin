import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/reset.css";

//router
import { router } from "@/routers/index";
// pinia和持久化
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).mount("#app");
