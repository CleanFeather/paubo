import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let imp = component => () => import('../components/' + component);

const routes = [
    {
        name: 'home',
        path: '/',
        component: imp('Home')
    },
    {
        name: 'register',
        path: '/register',
        component: imp('user/Register')
    },
    {
        name: 'login',
        path: '/login',
        component: imp('user/Login')
    },
]

export default new VueRouter({
    mode: 'history',
    routes
});