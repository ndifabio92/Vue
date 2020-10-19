const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de vue'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        // al crear los metodos, observadores y eventos, pero aun no accede al DOM
        // Aun no se puede acceder al 'el'
        console.log('created');
    },
    beforeMount() {
        // se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        // se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate() {
        // al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        // al realizar un cambio
        console.log('updated');
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        // se destruye toda la instancia
        console.log('destroy');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
})