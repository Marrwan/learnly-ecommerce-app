// import { createApp } from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default {
    install: (app) => {
        app.use(VueToast, {
            position: 'top-right',
            duration: 5000,
        });
    },
};
