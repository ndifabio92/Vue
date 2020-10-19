Vue.component('hijo', {
    template: `
        <div class="">
            <button @click="aumentar">+</button>
            <button @click="disminuir(2)">-</button>
            <button @click="obtenerCursos">Obtener Cursos</button>
            <h1>numero State: {{ numero }}</h1>
            <ul v-for="curso in cursos">
                <li>{{ curso.id }} - {{ curso.nombre }}</li>
            </ul>
        </div>
    `,
    computed: {
        ...Vuex.mapState(
            [ 'numero','cursos' ]
        )
    },
    methods: {
        ...Vuex.mapMutations(
            [ 'aumentar','disminuir' ]
        ),
        ...Vuex.mapActions(
            [ 'obtenerCursos' ]
        )
    }
})