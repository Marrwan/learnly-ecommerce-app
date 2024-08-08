import { createRouter, createWebHistory } from 'vue-router';
import ProductHome from '../components/ProductHome.vue';
import UserLogin from '../components/UserLogin.vue';
import ProductAdd from '../components/ProductAdd.vue';
import UserRegister from '../components/UserRegister.vue';
import NotFound from "@/components/NotFound.vue";

const routes = [
    { path: '/', component: ProductHome },
    { path: '/login', component: UserLogin },
    { path: '/register', component: UserRegister },
    { path: '/add-product', component: ProductAdd },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
