import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const auth = {
    state: {
        status: false,
        data: {}
    },
    mutations: {
        setStatus(state, status) {
            state.status = status;
        },
        setData(state, data) {
            state.data = data;
        },
        clear(state) {
            this.commit('setStatus', false);
            this.commit('setData', {});
            localStorage.removeItem('auth');
        }
    }
};

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++;
        },
    },
    getters: {

    },
    actions: {

    },
    modules: {
        auth,
    }
})