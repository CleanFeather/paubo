require('./bootstrap');

window.Vue = require('vue');

import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUi);

window._app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
