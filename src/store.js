import Vue from 'vue'
import Vuex from 'vuex'
import myAction from './actions'
import myMutation from './mutations'
import myGetters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test: 0
    },
    mutations: {
        ...myMutation
    },
    getters: {
        ...myGetters
    },
    actions: {
        ...myAction
    }
})
