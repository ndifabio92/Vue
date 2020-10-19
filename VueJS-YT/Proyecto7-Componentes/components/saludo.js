Vue.component('saludo', {
    template: `
        <div>
            <h1> {{ titulo }} </h1>
            <h3> asda </h3>
        </div>
    `,
    data() {
        return {
            titulo: 'hola',
        }
    }
});