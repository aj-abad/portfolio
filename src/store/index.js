import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        project: 0,
        locked: false
    },
    getters: {
        getProject: state => state.project,
        getLockStatus: state => state.locked
    },
    mutations: {
        setProject: (state, payload) => state.project = payload.project,
        toggleLock: (state, payload) => state.locked = payload.locked
    }
})