import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);

import '@/assets/scss/index.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';
app.AOS = AOS.init({
    duration: 1000,
});

import router from '@/router'
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(router).use(pinia).mount('#app')
