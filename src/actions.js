const testAction = ({commit, state}, item) => {
    setInterval(() => {
        // commit('myMutation')
        state.test++
    }, 500)
}

export default {
    testAction
}