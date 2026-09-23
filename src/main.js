import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@fontsource/be-vietnam-pro/400.css'; // Regular
import '@fontsource/be-vietnam-pro/500.css'; // Medium
import '@fontsource/be-vietnam-pro/700.css'; // Bold

createApp(App).use(router).mount('#app')
