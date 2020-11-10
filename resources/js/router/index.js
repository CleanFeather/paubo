import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let imp = component => () => import('../components/' + component);

const routes = [
    {
        name: 'test',
        path: '/test',
        component: imp('Test')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
});