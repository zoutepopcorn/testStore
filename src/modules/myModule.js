import * as NameSpace from '../NameSpace'

const state = {
    [NameSpace.AUTH_STATE]: {
        auth: {},
        error: null
    }
}

const getters = {
    [NameSpace.AUTH_GETTER]: state => {
        return state[NameSpace.AUTH_STATE]
    }
}

const mutations = {
    [NameSpace.AUTH_MUTATION]: (state, payload) => {
        state[NameSpace.AUTH_STATE] = payload
    }
}

const actions = {
    [NameSpace.ASYNC_AUTH_ACTION]: ({commit}, payload) => {

    }
}


export default {
    state,
    getters,
    mutations,
    actions
}