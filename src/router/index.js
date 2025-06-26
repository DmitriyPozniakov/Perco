import { createRouter, createWebHistory } from 'vue-router';
import BathroomPage from '@/pages/BathroomPage.vue';
import BedroomPage from '@/pages/BedroomPage.vue';
import DiningroomPage from '@/pages/DiningroomPage.vue';
import GardenPage from '@/pages/GardenPage.vue';
import HomePage from '@/pages/HomePage.vue';
import KitchenPage from '@/pages/KitchenPage.vue';
import LivingroomPage from '@/pages/LivingroomPage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/bathroom', name: 'bathroom', component: BathroomPage },
    { path: '/bedroom', name: 'bedroom', component: BedroomPage },
    { path: '/dining-room', name: 'diningRoom', component: DiningroomPage },
    { path: '/garden', name: 'garden', component: GardenPage },
    { path: '/kitchen', name: 'kitchen', component: KitchenPage },
    { path: '/living-room', name: 'livingRoom', component: LivingroomPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;