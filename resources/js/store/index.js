import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const auth = {
    state: {
        status: false,
        username: ''
    },
    mutations: {
        setStatus(state,status) {
            state.status = status;
        },
        setName(state,username) {
            state.username = username;
        }
    }
};

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count ++;
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