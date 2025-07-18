import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '@/pages/CategoryPage.vue';
import HomePage from '@/pages/HomePage.vue';
import TheLogin from '@/pages/TheLogin.vue';
import ProductPage from '@/pages/ProductPage.vue';
import TheBag from '@/pages/TheBag.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/category/:category', name: 'CategoryPage', component: CategoryPage },
    { path: '/login', name: 'loginForm', component: TheLogin },
    { path: '/products/:id', name: 'productPage', component: ProductPage },
    { path: '/bag/:id', name: 'shoppingBag', component: TheBag },
    { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;