import { createRouter, createWebHistory } from 'vue-router';
import ProductHome from '../components/ProductHome.vue';
import UserLogin from '../components/UserLogin.vue';
import ProductAdd from '../components/ProductAdd.vue';

const routes = [
    { path: '/', component: ProductHome },
    { path: '/login', component: UserLogin },
    { path: '/add-product', component: ProductAdd },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
