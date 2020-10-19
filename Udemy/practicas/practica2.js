new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Max',
        counter2: 0,
        result: ''
    },
    methods: {
        sayHello : function() {
            this.title = 'hello';
            return this.title;
        },
        increase : function(step,event) {
            this.counter += step;
        },
        updateCoordinates : function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        },
        incrase: function() {
            this.counter2++;
            this.result = this.counter2 > 5 ? 'Grater 5' : 'Smaller 5';
        },
        decrase: function() {
            this.counter2--;
            this.result = this.counter2 > 5 ? 'Grater 5' : 'Smaller 5';
        },
        result() {
            return this.counter2 > 5 ? 'Grater 5' : 'Smaller 5';
        }
    }
})