import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '@/pages/CategoryPage.vue';
import HomePage from '@/pages/HomePage.vue';
import TheLogin from '@/pages/TheLogin.vue';
import ProductPage from '@/pages/ProductPage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/category/:category', name: 'CategoryPage', component: CategoryPage },
    { path: '/login', name: 'loginForm', component: TheLogin },
    { path: '/products/:id', name: 'productPage', component: ProductPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;