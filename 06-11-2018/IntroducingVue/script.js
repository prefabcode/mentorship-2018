const app = new Vue({
    el: '#app',
    data: {
        name: 'Lenny',
        todoList: ['Do Laundry', 'Walk the dog', 'Buy Groceries', 'Study for test'],
        message: null,
    },
    methods: {
        clickAction: function() {
            if (this.message === null) {
                this.message = 'You clicked a button';
            }
        }  
    }
});