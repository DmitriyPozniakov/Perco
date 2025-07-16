import { createApp } from 'vue'
import App from './App.vue'
import './global.css'
import './fonts.css' 
import router from './router'
import store from './store'
import CategoryBanner from './base/CategoryBanner.vue'
import baseLoader from './base/baseLoader.vue'
import baseCard from './base/baseCard.vue'
import baseDiscount from './base/baseDiscount.vue'
import baseButton from './base/baseButton.vue'
import BaseAccordion from './base/BaseAccordion.vue'
import baseInput from './base/baseInput.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('category-banner', CategoryBanner)
app.component('base-loader', baseLoader)
app.component('base-card', baseCard)
app.component('base-discount', baseDiscount)
app.component('base-button', baseButton)
app.component('base-accordion', BaseAccordion)
app.component('base-input', baseInput);

app.mount('#app')

