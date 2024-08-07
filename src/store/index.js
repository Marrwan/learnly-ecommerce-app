import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        products: [],
        user: null,
        token: ''
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
        fetchProducts({ commit }) {
            axios.get('/api/products')
                .then(response => commit('SET_PRODUCTS', response.data))
                .catch(error => console.log(error));
        },
        login({ commit }, userData) {
            return axios.post('/api/login', userData)
                .then(response => {
                    commit('SET_USER', response.data.user);
                    commit('SET_TOKEN', response.data.token);
                });
        },
        addProduct({ state }, productData) {
            return axios.post('/api/products', productData, {
                headers: { Authorization: `Bearer ${state.token}` }
            });
        }
    }
});

export default store;
