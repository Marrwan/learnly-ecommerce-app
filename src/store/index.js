// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:3000';

console.log(process.env, "env",);
const store = createStore({
    state: {
        products: [],
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token;
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const response = await axios.get('/api/products');
                commit('SET_PRODUCTS', response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async login({ commit }, userData) {
            const response = await axios.post('/api/login', userData);
            commit('SET_USER', response.data.user);
            commit('SET_TOKEN', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
        },
        async register(_, userData) {
            await axios.post('/api/register', userData);
        },
        async addProduct({ state }, productData) {
            await axios.post('/api/products', productData, {
                headers: { Authorization: `Bearer ${state.token}` }
            });
        }
    }
});

export default store;
