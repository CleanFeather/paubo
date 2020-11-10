require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';

Vue.use(ElementUi);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
