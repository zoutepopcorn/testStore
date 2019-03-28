<template>
    <div>
        <br><br>
        {{testGetter}}
        <br><br>
        <br><br>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    let vm

    export default {
        created() {
            vm = this
            setTimeout(() => {
                vm.testMutation()
                setTimeout(() => {
                    vm.testAction()
                }, 1500)
            }, 1500)
        },
        methods: {
            ...mapMutations(['testMutation']),
            ...mapActions(['testAction'])
        },
        computed: {
            ...mapGetters([ 'testGetter'])
        }


    }
</script>

<style scoped>

</style>
