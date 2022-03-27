import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

console.log('main1.js')
const app = createApp(App).use(router()).mount('#app')

console.log('after mount')

