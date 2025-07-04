import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import './fonts.css' 
import router from './router'
import store from './store'
import CategoryBanner from './base/CategoryBanner.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('category-banner', CategoryBanner)

app.mount('#app')

