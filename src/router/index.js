import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import CategoryPage from '@/pages/CategoryPage.vue';
import HomePage from '@/pages/HomePage.vue';
import TheLogin from '@/pages/TheLogin.vue';
import ProductPage from '@/pages/ProductPage.vue';
import TheBag from '@/pages/TheBag.vue';
import TheAccount from '@/pages/TheAccount.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/category/:category', name: 'CategoryPage', component: CategoryPage },
    { path: '/login', name: 'loginForm', component: TheLogin },
    { path: '/products/:id', name: 'productPage', component: ProductPage },
    { path: '/bag/:id', name: 'shoppingBag', component: TheBag },
    {
        path: '/account',
        name: 'account',
        component: TheAccount,
        meta: { requiresAuth: true } // флаг, что нужна авторизация
    },
    { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

// Навигационный guard
router.beforeEach((to, from, next) => {
    const isAuth = store.getters['auth/isAuthenticated'];

    if (to.meta.requiresAuth && !isAuth) {
        // Если маршрут требует авторизацию, а пользователь не залогинен — перенаправляем на логин
        next({ name: 'loginForm' });
    } else if (to.name === 'loginForm' && isAuth) {
        // Если пользователь уже залогинен и пытается зайти на страницу логина — редирект на аккаунт
        next({ name: 'account' });
    } else {
        next();
    }
});


export default router;