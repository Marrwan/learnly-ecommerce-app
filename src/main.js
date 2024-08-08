import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/styles.css';
import ToastPlugin from './plugins/toast.js'; 

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ToastPlugin);
app.mount('#app');
