Vue.component('hijo', {
    template: `
        <div class="p-5 bg-success text-white">
            <h4>Componente Hijo: {{ numero }}</h4>
            <h4>Nombre: {{ nombre }}</h4>
            <button @click="numero++">+</button>
        </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Ignacio Hijo'
        }
    },
    mounted() {
        // se ejecuta cuando el dom se encuentra listo
        this.$emit( 'nombreHijo', this.nombre );
    }
})