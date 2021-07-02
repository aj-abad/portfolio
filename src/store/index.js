import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: {}
    },
    getters: {
        getProject: state => state.project
    },
    mutations: {
        setProject: (state, payload) => state.project = payload.project
    }
})