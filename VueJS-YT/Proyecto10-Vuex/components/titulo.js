Vue.component('titulo', {
    template: `
        <div class="">
            <h1>numero {{ numero }}</h1>
            <hijo></hijo>
        </div>
    `,
    computed: {
        ...Vuex.mapState(
            ['numero']
        )
    }
});