import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import './fonts.css' 
import router from './router'
import CategoryBanner from './base/CategoryBanner.vue'

const app = createApp(App)
app.use(router)


app.component('category-banner', CategoryBanner)

app.mount('#app')
